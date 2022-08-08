<template>
  <div>
    <h1>Use Modal</h1>
    <button class="btn btn-primary" @click.prevent="openModal">Use Modal</button>
    <v-modal name="example-modal">
      <h2>Example Modal</h2>
      <button class="btn btn-primary" @click.prevent="closeModal">Close</button>
    </v-modal>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      console.log('Close modal...');
      this.$modal.close({name: 'example-modal'});
    },
    openModal() {
      console.log('Open modal...');
      this.$modal.open({name: 'example-modal'});
    }
  }
}
</script>
