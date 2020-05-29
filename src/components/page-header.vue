<template>
  <div><h1>{{pageTitle}}</h1></div>
</template>

<script>
  export default {
    props: ['pageTitle']
  }
</script>

<style scoped>
  h1 {
    font-size: 40px;
    color: mediumseagreen;
  }
  div {
    border-color: thistle;
    width: 200px;
  }
</style>