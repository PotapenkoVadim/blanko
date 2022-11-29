<template>
  <h3 class="greeting" v-if="text">
    Hello {{text}}!
  </h3>
</template>

<script>
export default {
  name: 'GreetingText',
  props: ['text']
}
</script>

<style scoped>
.greeting { margin: 0; text-align: center; color: snow; }
</style>