<template>
  <ol   class="path_under_header path_under_header2">
    <li class="link_path" >
      <a href="/" class="span_link" ><span>ریحون</span></a>
      <span class="_2see2 _3FcZB _20sJg"                                                                                            ><svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20" ><path
        fill="currentColor" fill-rule="evenodd"
        d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z"
      ></path></svg></span>
      <meta   />
    </li>
    <li class="link_path" >
      <a :href=link class="span_link" >
        <span>{{area_name}}</span></a>
      <span class="_2see2 _3FcZB _20sJg" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20" ><path fill="currentColor" fill-rule="evenodd" d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z"></path></svg></span>
      <meta   />
    </li>
    <li
      class="link_path" ><span><span>{{restaurant_name}}</span></span>
      <meta/>
    </li>
  </ol>
</template>

<script>
    export default {
        name: "PathRestaurant",
        props: ['link', 'area_name', 'restaurant_name']
    }
</script>

<style scoped>
  .path_under_header2 {
    right: 0;
    display: none !important;
    position: absolute;
    top: -64px;
    top: -4rem;
  }
  .path_under_header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: hsla(0, 0%, 100%, .9);
    border-radius: .4rem;
    padding: 0 16px;
    padding: 0 1rem
  }
  .link_path {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #777;
    font-size: 19.2px;
    font-size: 1.2rem
  }
  .link_path:last-child {
    font-weight: 700
  }
  .span_link {
    color: #5890ff;
    text-decoration: none
  }
  ._2see2 svg {
    width: 100%;
    height: 100%
  }
  ._20sJg {
    width: 6.4px !important;
    width: .4rem !important;
    margin: 0 16px;
    margin: 0 1rem
  }
</style>
