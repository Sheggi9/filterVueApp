<template>
<div>
  <header class="header">
    <div class="header__logo">Logo</div>
    <nav class="header__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/table">Table</router-link>
    </nav>
  </header>
  <hr>
    <slot></slot>
  <hr>
  <h1>Footer</h1>
</div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="sass">
  .header
    border-bottom: 100px solid aliceblue
    &__logo
      float: left
    &__nav
      float: right
      white-space: nowrap
      a
        text-decoration: none
        padding: 10px
</style>
