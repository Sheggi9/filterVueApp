<template>
  <div class="post-wrap">
    <h1>{{title}}</h1>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'text'],
  name: 'Post'
}
</script>

<style scoped>

</style>
