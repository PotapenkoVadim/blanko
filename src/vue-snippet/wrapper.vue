<template>
  <div class="wrapper">
    <div class="wrapper__header">Example Vue App:</div>
    <div class="wrapper__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WrapperSnippet'
}
</script>

<style scoped>
.wrapper { position: fixed; bottom: 25px; right: 12px; border-radius: 3px; cursor: pointer;
  background-color: cadetblue; box-shadow: 3px 3px 5px grey; min-width: 250px; min-height: 80px;
  transition: all 0.3s ease-in;
}
.wrapper:hover { box-shadow: 8px 8px 18px grey; transform: scale(1.05); }
.wrapper__header { border-bottom: 1px solid lightblue; padding: 15px 20px; color: snow; }
.wrapper__content { padding: 15px 20px; }
</style>