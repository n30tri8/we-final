<template>
  <div>
    <AppHeader />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
  components: { AppHeader, AppFooter }
}



</script>

<style>
@font-face {
  font-family: Shabnam;
  src: url('../assets/style/fonts/Shabnam.eot');
  src: url('../assets/style/fonts/Shabnam.eot?#iefix') format('embedded-opentype'),
  url('../assets/style/fonts/Shabnam.woff') format('woff'),
  url('../assets/style/fonts/Shabnam.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Shabnam;
  src: url('../assets/style/fonts/Shabnam-Bold.eot');
  src: url('../assets/style/fonts/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
  url('../assets/style/fonts/Shabnam-Bold.woff') format('woff'),
  url('../assets/style/fonts/Shabnam-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Shabnam;
  src: url('../assets/style/fonts/Shabnam-Light.eot');
  src: url('../assets/style/fonts/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
  url('../assets/style/fonts/Shabnam-Light.woff') format('woff'),
  url('../assets/style/fonts/Shabnam-Light.ttf') format('truetype');
  font-weight: 300;
}
body {
  margin: 0;
  font-family: Shabnam, fantasy;
  font-size: 16px;
  color: #656566;
  line-height: 25px;
  text-align: right;
  direction: rtl;
  background-color: #fafafa;
}
ul{
  list-style: none;
  display: flex;
}
a{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: auto;
  padding: 0;
  text-decoration: none;
  color: #4a4a4a;
  -webkit-transition: border-color .3s;
  -o-transition: border-color .3s;
  transition: border-color .3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
