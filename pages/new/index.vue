<template>
  <div class="page-body">
    <div class="container">
      <div class="article-new py-4 flex-center-x flex-start-y">
        <main class="main">
          <article class="article">
            <div v-if="addImg" class="article-status pb-2">
              <div class="article-img-new flex">
                <label class="label mb-2" @click="toggleAddImg"
                  >Add Cover Image</label
                >
              </div>
            </div>
            <div v-else class="article-status pb-2" @click="toggleAddImg">
              <div class="article-status-img flex">
                <label class="label mb-2">Cover Image</label>
                <img class="img-upload" :src="COVER_DEFAULT" :alt="coverName" />
              </div>
            </div>
            <div class="article-body flex-col">
              <div class="box box-title flex-col">
                <textarea
                  class="article-title input-txt"
                  id="article-title"
                  v-model="article.title"
                  placeholder="Enter title here"
                  :rows="2"
                />
              </div>
              <vue-tags-input
                v-model="tag"
                :tags="tags"
                @tags-changed="(newTags) => (tags = newTags)"
              >
                <template slot="autocomplete-header">
                  <strong>Select your favorite bike maker ↓</strong>
                </template>
                <template slot="autocomplete-footer">
                  <small>
                    <em>Or keep going with your worlds...</em>
                  </small>
                </template>
              </vue-tags-input>
              <div class="box box-content flex-col">
                <div class="editor">
                  <quill-editor
                    theme="snow"
                    toolbar="full"
                    v-model="article.content"
                    @change="onEditorChange($event)"
                    @ready="onEditorReady($event)"
                  />
                </div>
              </div>
            </div>
          </article>
          <div class="comment-submit">
            <button class="btn btn-comment mr-4" @click="handleCreateArticle">
              Publish
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      article: {
        title: "NEW POST TITLE HERE",
        content: "Write your post content here...",
      },
      COVER_DEFAULT: "https://picsum.photos/600/400",
      addImg: true,
      tag: "",
      tags: [],
    };
  },
  middleware: ["auth"],
  methods: {
    onEditorChange(e) {
      console.log("onEditorChange", e);
    },
    onEditorReady(e) {
      console.log("onEditorReady", e);
      e.container.querySelector(".ql-editor").innerHTML = this.article.content;
    },
    async handleCreateArticle() {
      try {
        const tags = this.solveTags(this.tags);
        const apiKey = localStorage.getItem("api-key");
        const body = this.article;
        body.content = document.querySelector(".ql-editor").innerHTML;
        const bodyPost = {
          article: {
            title: body.title,
            body_markdown: body.content,
            published: true,
            tags: tags,
          },
        };
        if (!this.addImg) {
          bodyPost.article = {
            ...bodyPost.article,
            main_image: this.COVER_DEFAULT,
          };
        }
        const res = await axios.post("https://dev.to/api/articles", bodyPost, {
          headers: {
            "Content-Type": "application/json",
            "api-key": JSON.parse(apiKey),
          },
        });
        this.$router.push(`${res.data.user.username}/${res.data.id}`);
      } catch (error) {
        throw error;
      }
    },
    toggleAddImg() {
      this.addImg = !this.addImg;
    },
    solveTags(tags) {
      let tagArr = [];
      tags.map((item) => {
        tagArr.push(item.text);
      });
      return tagArr;
    },
  },
};
</script>
