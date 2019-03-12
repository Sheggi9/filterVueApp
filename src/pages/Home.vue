<template>
  <main-layout>
    <div class="hello">
      Home page
    </div>
    <Post
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :text="post.text"
      id="posts.id"></Post>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import Post from '@/components/Post'
export default {
  components: {Post, MainLayout},
  data () {
    return {
      posts: [
        {id: 1, title: 'title 1', text: 'lorem 10'},
        {id: 2, title: 'title 2', text: 'lorem 10'},
        {id: 3, title: 'title 3', text: 'lorem 10'},
        {id: 4, title: 'title 4', text: 'lorem 10'},
        {id: 5, title: 'title 5', text: 'lorem 10'},
        {id: 6, title: 'title 6', text: 'lorem 10'}
      ]
    }
  }
}
</script>

<style>
</style>
