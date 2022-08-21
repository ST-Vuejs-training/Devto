<p>
<h1 align="center">
  ST - Devto Nuxt.js
</h1>
<p>
<p align="center" style="font-size: 1.2rem;">Cloned dev.to web with Nuxtjs and devto.API</p>

> [Read the docs nuxtjs](https://nuxtjs.org/) |
> [Dev.to website](https://dev.to/)
> |
> [Cloned devto nuxtjs](https://devtonuxtjs.herokuapp.com/)

<hr />

[![Dev.to blog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/)
[![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82&suffix='1234')](https://nuxtjs.org/)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Features](#features)
  - [List all posts](#list-all-posts)
  - [List a article's detail](#list-a-article's-detail)
  - [List articles with tags](#list-articles-with-tags)
  - [Show user's info](#show-users-info)
  - [Show user's articles](#show-users-articles)
  - [Login](#login)
  - [Create a article](#create-a-article)
  - [Update a article](#update-a-article)
  - [Get comments](#get-comments)
- [Nuxtjs Concepts](#nuxtjs-concepts)
  - [Work flow](#work-flow)
  - [Directives](#directives)
  - [Computed & Method](#computed-&-method)
- [Advanced nuxtjs](#advanced-nuxtjs)
- [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install
```

Run local

```ts
npm run dev
```

> Cloned devto app is running at `http://localhost:3000` 👍

build for production and launch server

```
npm run build
npm run start
```

generate static project

```
npm run generate
```

## Features

### [List all posts](https://devtonuxtjs.herokuapp.com/)

> method: GET | `https://dev.to/api/articles`

List all latest articles

### [List a article's detail](https://devtonuxtjs.herokuapp.com/sadeedpv/1171385)

> method: GET | `https://dev.to/api/articles/{id}`

List a article's detail with id

### [List articles with tags](https://devtonuxtjs.herokuapp.com/t/github)

> method: GET | `https://dev.to/api/articles?tags={tag}`

List articles with tags

### [Show user's info](https://devtonuxtjs.herokuapp.com/stvantran)

> method: GET | `https://dev.to/api/users/by_username?url=ben`

Show a user's information

### [Show user's articles](https://devtonuxtjs.herokuapp.com/stvantran)

> method: GET | `https://dev.to/api/articles?username={name}`

Show all articles of user

### [Login](https://devtonuxtjs.herokuapp.com/auth/login)

> method: POST | `https://dev.to/api/users/me`

Get auth user info

### [Create a article](https://devtonuxtjs.herokuapp.com/new)

> method: POST | `https://dev.to/api/articles`

Create a article

### [Update a article](https://devtonuxtjs.herokuapp.com/edit/stvantran/1169436)

> method: PUT | `https://dev.to/api/articles/{id}`

Update a article

### [Get comments](https://devtonuxtjs.herokuapp.com/dechamp/1172149)

> method: GET | `https://dev.to/api/comments?a_id={id}`

Get all comments of a article

## Nuxtjs Concepts

### [Work flow](https://nuxtjs.org/docs/concepts/nuxt-lifecycle)

<img src="https://seal.deha.vn/wp-content/uploads/2021/09/nuxt-schema.png"/>

### [Directives](https://vuejs.org/api/built-in-directives.html)

```ts
    <nuxt-link
        v-for="tag in article.tags"
        :key="tag"
        :to="{ name: 't-tag', params: { tag } }"
        class="tag">
            #{{ tag }}
    </nuxt-link>
```

### [Computed & Method]()

<b>header.vue</b>

```ts
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    logout() {
      this.$store.commit("clearUserInfo");
    },
  },
```

## Advanced nuxtjs

<!-- This table was generated via http://www.tablesgenerator.com/markdown_tables -->

| property            | detail                                  | description                                            |
| ------------------- | --------------------------------------- | ------------------------------------------------------ |
| `fetch, fetchState` | `fetch script`                          | `$fetchState.pending $fetchState.error `               |
| `middleware`        | `check auth`                            | Check auth before access one page `middleware/auth.ts` |
| `plugins`           | `modal, quills, placeholder, tag input` | `plugins/vue-tags-input.js --> Vue.use(VueTagsInput);` |
| `stores`            | `vueX`                                  | Store user's info                                      |
| `eventbus`          | `modal`                                 | `this.$modal.open({ name: "confirm-logout-modal" });`  |

## Contributors

- [Van Tran. H](https://github.com/st-vantran)
- [Quang Nguyen. H. D](https://github.com/st-quangnguyen2)
- [Vy Duong. T](https://github.com/st-vyduong)

<p>
