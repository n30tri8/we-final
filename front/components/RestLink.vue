<template>
    <div class="outer-div">
      <div class="inner-div" v-bind:class="[open ? 'open-rest' : 'closed-rest']">
        <nuxt-link :to="'rest-info/' + info.id" class="rest-page-link">
          <div class="rest-info">
            <div class="rest-info-img-div">
              <div class="rest-info-img-div2">
                <img class="rest-info-img" :src="`rest-logo/${info.logo}`" alt="restaurant logo">
              </div>
            </div>
            <div class="rest-info2">
              <h2 class="rest-info-name">{{info.name}}</h2>
              <p class="rest-info-score">{{info.averageRate}}</p>
              <div class="rest-info3">
                <ul class="rest-info-foods">
                  <li class="rest-info-foods-item" v-for="item in info.categories">
                    {{item.name}}
                  </li>
                </ul>
                <address class="rest-info-address">{{info.address.addressLine}}</address>
              </div>
            </div>
          </div>
          <div class="order-btn" v-show="open">
            <div class="order-btn2">
              <button class="order-btn3">شروع سفارش</button>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RestLink",
      props: ['info', 'open']
    }
</script>

<style scoped>
  .outer-div{
    margin: 0 0 2.6rem 2%;
    width: 30%;
  }
  .inner-div{
    border-radius: .4rem;
    -webkit-box-shadow: 0 0 0.4rem rgba(0,0,0,.12);
    box-shadow: 0 0 0.4rem rgba(0,0,0,.12);
    border: 1.6px solid transparent;
    border: .1rem solid transparent;
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .open-rest{
    background-color: #fff;
  }
  .closed-rest{
    background-color: rgba(0,0,0,.04);
  }
  .inner-div:hover{
    -webkit-transition: -webkit-box-shadow .3s;
    transition: -webkit-box-shadow .3s;
    -o-transition: box-shadow .3s;
    transition: box-shadow .3s;
    transition: box-shadow .3s,-webkit-box-shadow .3s;
    -webkit-box-shadow: 0 0.3rem 2rem rgba(0,0,0,.2);
    box-shadow: 0 0.3rem 2rem rgba(0,0,0,.2);
  }
  .rest-page-link{
    text-decoration: none;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100%;
  }
  .order-btn{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    background-color: #fafafa;
    height: 89.6px;
    height: 5.6rem;
    padding: 14.4px 38.4px;
    padding: .9rem 2.4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .order-btn2{
    margin: auto;
  }
  .order-btn3{
    min-width: 80px;
    min-width: 5rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 20rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 48px;
    color: #fff;
    padding: 16px 48px;
    padding: 1rem 3rem;
    font-size: 22.4px;
    font-size: 1.4rem;
    cursor: pointer;
    outline: none;
    margin: auto;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    text-decoration: none;
    min-width: 212.8px;
    border: .1rem solid #d40062;
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #d40062;
    padding: 8px 0;
    text-align: center;
    margin: 0;
    font-family: Shabnam;
  }
  .order-btn3:hover{
    background-color: rgba(212,0,98,.05)!important;
  }
  .rest-info{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    padding: 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .rest-info-img-div{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 1rem;
    width: 30%;
    height: 6rem;
  }
  .rest-info-img-div2{
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1.6px solid #cbcbcb;
    border: .1rem solid #cbcbcb;
    margin: 0;
    border-radius: .4rem;
    width: 100%;
    height: 100%;
  }
  .rest-info-img{
    width: 100%;
    height: auto;
    display: block;
    visibility: visible;
    color: transparent;
    object-fit: cover;
  }
  .rest-info2{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 65%;
    height: 100%;
  }
  .rest-info-name{
    font-size: 1.5rem;
    color: #191919;
    font-weight: 700;
    margin-bottom: .4rem;
    margin-top: 1rem;
    text-align: right;
    line-height: 1.4;
  }
  .rest-info-score{
    color: #f9b92b;
    font-size: 14px;
    font-weight: 700;
    margin-right: 3.2px;
    margin-right: .2rem;
  }
  .rest-info3{
    width: 100%;
  }
  .rest-info-address{
    display: block;
    font-style: normal;
    color: #777;
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-bottom: 0;
    font-size: 16px;
    font-size: 1rem;
    text-align: right;
    line-height: 1.5;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .rest-info-address::after{
    content: "";
    height: 100%;
    display: block;
    position: absolute;
    background: -webkit-gradient(linear,left top,right top,color-stop(30%,#fff),to(hsla(0,0%,100%,0)));
    background: -webkit-linear-gradient(left,#fff 30%,hsla(0,0%,100%,0));
    background: -o-linear-gradient(left,#fff 30%,hsla(0,0%,100%,0) 100%);
    background: linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0));
    top: 0;
    left: 0;
    width: 60px;
  }
  .rest-info-foods{
    color: #4a4a4a;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0;
    padding-right: 0;
  }
  .rest-info-foods-item{
    font-size: 16px;
    font-size: 1rem;
    font-weight: 600;
    color: #4a4a4a;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-bottom: .5rem;
  }
  .rest-info-foods-item::after{
    content: "";
    display: inline-block;
    width: 6.4px;
    width: .4rem;
    height: 6.4px;
    height: .4rem;
    border-radius: 1rem;
    margin: 0 11.2px;
    margin: 0 .7rem;
    background-color: #4a4a4a;
  }
</style>
