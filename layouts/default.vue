<template>
    <div class="container-fluit">
     <app-nav-bar></app-nav-bar>
    <nuxt />
      </div>
</template>

<script type="text/javascript">
import navBar from '@/components/layout/nav.vue'
export default{
    components:{
        "app-nav-bar":navBar
    }
}
</script>
<style>

body{
    margin:0;
    font-family: 'Raleway', sans-serif;
}
</style>
