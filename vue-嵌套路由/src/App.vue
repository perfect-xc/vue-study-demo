<template>
  <div>
    <header class='yule'>顶部</header>
    <div >
       <router-link :to="{name:'movie'}">movie</router-link>
       <router-link :to="{name:'music'}">music</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="" scope>
  .yule{
    float:left;
  }
</style>
