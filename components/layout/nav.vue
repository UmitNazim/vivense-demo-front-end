<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <nuxt-link tag="b-nav-item" to="/">Product Module</nuxt-link>
      <nuxt-link class="margin-left btn btn-primary" v-if="this.$route.name=='product'" tag="button" to="/product/create">New Product</nuxt-link>
    </b-navbar-nav>
  </b-navbar>

</div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  created() {
    console.log(this.$route.name)
  }
}
</script>
<style media="screen">
.margin-left {
  margin-left: 1500px
}
</style>
