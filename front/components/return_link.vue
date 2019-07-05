<template>
  <div class="return" >
    <a href="/tehran/yusefabad/" class="return_link">
      رستوران‌ها
      <span class="_2see2 _3FcZB _3wUgW" >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20" ><path
                                      fill="currentColor" fill-rule="evenodd"
                                      d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z"
                                    ></path></svg></span></a></div>
</template>

<script>
    export default {
        name: "return_link"
    }
</script>

<style scoped>
  .return {
    position: absolute;
    top: -4rem;
    left: 1.5rem;
    text-align: center;
  }
  .return_link {
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
    padding: 0 1rem;
    font-size: 19.2px;
    font-size: 1.2rem;
    color: #777;
    text-decoration: none
  }
  ._2see2 {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s
  }
  ._2see2 svg {
    width: 100%;
    height: 100%
  }
  ._3wUgW {
    width: 6.4px !important;
    width: .4rem !important;
    margin: 0 16px;
    margin: 0 1rem;
    color: #777;
    margin-left: 0
  }
</style>
