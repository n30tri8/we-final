<template>
  <div id="navbar">
    <div id="login-reg-link">
      <ul>
        <li class="log-reg-li">
          <a href="/reg_log" class="log-reg-a">ورود</a>
        </li>
        <li id="log-reg-vert-line" class="log-reg-li" />
        <li class="log-reg-li">
          <a href="/reg_log" class="log-reg-a">عضویت</a>
        </li>
      </ul>
    </div>
    <ul>
      <li class="log-reg-li">
        <a rel="nofollow" href="/help" class="log-reg-a">راهنما</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
  #navbar{
    height: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: static;
    top: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 0.4rem 0.8rem rgba(0,0,0,.21);
    box-shadow: 0 0.4rem 0.8rem rgba(0,0,0,.21);
    z-index: 10;
    -webkit-border-image: -webkit-gradient(linear,right top,left top,from(#8b00af),color-stop(#d40062),to(#ff0613)) 1;
    -webkit-border-image: -webkit-linear-gradient(right,#8b00af,#d40062,#ff0613) 1;
    -o-border-image: -o-linear-gradient(right,#8b00af,#d40062,#ff0613) 1;
    border-image: -webkit-gradient(linear,right top,left top,from(#8b00af),color-stop(#d40062),to(#ff0613)) 1;
    border-image: linear-gradient(270deg,#8b00af,#d40062,#ff0613) 1;
    border-width: 0 0 .3rem;
    border-style: solid;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  #login-reg-link{
    padding-left: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: flex;
    position: relative;
  }
  #log-reg-vert-line{
    height: 20px;
    width: 2px;
    background-color: #cbcbcb;
    vertical-align: middle;
    margin: auto 0;
  }
  .log-reg-li{
    display: inline-block;
  }
  .log-reg-a{
    padding: 0 1rem;
  }
  .log-reg-a:hover{
    color: #d40062;
  }

</style>
