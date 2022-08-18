<template>
  <div modal="true">
    <div>
      <div v-if="visible" :data-model="name" class="v-modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="v-modal__mask"
        >
          <div class="v-modal__body">
            <slot :payload="payload"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VModal from './handle.js'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      payload: null,
      visible: false
    };
  },
  beforeMount() {
    // open event
    VModal.EventBus.$on('open', params => {
      if (this.name === params.name) {
        this.open(params);
      }
    });

    // close event
    VModal.EventBus.$on('close', params => {
      if (this.name === params.name) {
        this.close(params);
      }
    });
  },
  methods: {
    open() {
      this.visible = true;
      // TO DO SOMETHING
    },
    close() {
      this.visible = false;
      // TO DO SOMETHING
    }
  },
};
</script>

<style scoped>
/* The Modal (background) */
.v-modal {
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  max-width: unset;
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Enable scroll if needed */
  background-color: rgba(18,18,18,0.5);
  z-index: 999; /* Sit on top */
}

/* Modal Content/Box */
.v-modal__body {
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  min-width: 300px; /* Could be more or less, depending on screen size */
  background-color: #fefefe;
  border: 1px solid #888;
  border-radius: 4px;
}

</style>
