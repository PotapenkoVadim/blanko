<template>
  <wrapper-snippet>
    <greeting-text text="Vue"></greeting-text>
  </wrapper-snippet>
</template>

<script lang="ts">
import WrapperSnippet from './wrapper.vue';
import GreetingText from './greeting.vue';

export default {
  name: 'VueSnippet',
  components: { WrapperSnippet, GreetingText }
}
</script>

<style scoped ></style>