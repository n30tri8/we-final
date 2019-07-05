<template>
    <li class="_3KPKu">{{value}}</li>
</template>

<script>
    export default {
      name: "rest_categories",
      props: ['value']
    }
</script>

<style scoped>
  ._3KPKu {
    padding: 0;
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 700
  }

  ._3KPKu:after {
    content: "";
    display: inline-block;
    width: 6.4px;
    width: .4rem;
    height: 6.4px;
    height: .4rem;
    border-radius: 1rem;
    margin: 0 11.2px;
    margin: 0 .7rem;
    background-color: #4a4a4a
  }

  ._3KPKu:last-child:after {
    display: none
  }
</style>
