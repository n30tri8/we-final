<template>
  <div id="section-45490" class="uUS49" >
    <div class="_2JbF0" >
      <div class="_22lSF _1B6X6" >
        <div class="_3U1yg" >
          <div role="presentation" class="_1g9Kj" >
            <h2 class="_1sKGv">{{category}}</h2>
          </div>
        </div>
        <div class="_3cbyZ" >
          <Food v-for="f in foods"  v-if="f.foodSet === category" :name="f.name" :description="f.description" :price="f.price" :key="f" ></Food>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Food from '../components/Food'
    export default {
      components : {
        Food
      },
      name: "Category",
      props: ['category', 'foods']
    }
</script>

<style scoped>
  ._3kzhn, .uUS49 {
    margin-top: 0
  }@media (min-width: 769px) {
    ._2Y7NT {
      max-width: 34.1rem
    }

    .P3AhQ {
      font-size: 1.5rem;
      padding: 0
    }

    .pic_under_header {
      overflow: hidden;
      margin-bottom: 17rem;
      height: 29.5rem
    }

    .pic_under_header .image_under_header {
      max-width: 100%;
      height: auto;
      display: block;
      margin: auto
    }

    .under_header {
      overflow: hidden
    }

    ._3kzhn {
      position: -webkit-sticky;
      position: sticky;
      width: 74.4rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: auto;
      top: 0;
      display: block;
      z-index: 110;
      -webkit-box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1);
      box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1);
      margin-top: -6rem
    }

    .info_under_header_box {
      width: 74.4rem;
      margin-left: -37.2rem;
      position: absolute;
      left: 50%;
      top: auto;
      bottom: 2rem
    }

    ._2gk47 {
      -ms-flex-preferred-size: 40%;
      flex-basis: 40%
    }

    ._2QBZ7 {
      -ms-flex-preferred-size: 45%;
      flex-basis: 45%
    }

    ._10dFG {
      width: 70%;
      margin: auto
    }

    ._2JbF0 {
      padding: 0
    }

    ._1zBY1, ._3v_2d {
      margin-top: 5rem
    }

    ._1vTJy {
      font-size: 2rem;
      margin-bottom: 2rem;
      top: auto;
      padding: 0;
      position: static
    }

    .uUS49 {
      margin-top: 0
    }
  }
  ._2JbF0 {
    margin: 0 auto;
    max-width: 1190.4px;
    max-width: 74.4rem;
    padding: 0 16px;
    padding: 0 1rem
  }
  ._1zBY1 ._2JbF0 {
    border-bottom: 1.6px solid #e2e2e2;
    border-bottom: .1rem solid #e2e2e2;
    padding-bottom: 48px;
    padding-bottom: 3rem
  }
  @media (min-width: 769px) {
    ._2Y7NT {
      max-width: 34.1rem
    }

    .P3AhQ {
      font-size: 1.5rem;
      padding: 0
    }

    .pic_under_header {
      overflow: hidden;
      margin-bottom: 17rem;
      height: 29.5rem
    }

    .pic_under_header .image_under_header {
      max-width: 100%;
      height: auto;
      display: block;
      margin: auto
    }

    .under_header {
      overflow: hidden
    }

    ._3kzhn {
      position: -webkit-sticky;
      position: sticky;
      width: 74.4rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: auto;
      top: 0;
      display: block;
      z-index: 110;
      -webkit-box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1);
      box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1);
      margin-top: -6rem
    }

    .info_under_header_box {
      width: 74.4rem;
      margin-left: -37.2rem;
      position: absolute;
      left: 50%;
      top: auto;
      bottom: 2rem
    }

    ._2gk47 {
      -ms-flex-preferred-size: 40%;
      flex-basis: 40%
    }

    ._2QBZ7 {
      -ms-flex-preferred-size: 45%;
      flex-basis: 45%
    }

    ._10dFG {
      width: 70%;
      margin: auto
    }

    ._2JbF0 {
      padding: 0
    }

    ._1zBY1, ._3v_2d {
      margin-top: 5rem
    }

    ._1vTJy {
      font-size: 2rem;
      margin-bottom: 2rem;
      top: auto;
      padding: 0;
      position: static
    }

    .uUS49 {
      margin-top: 0
    }
  }
  ._22lSF {
    padding: 0 8px;
    padding: 0 .5rem;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: inherit;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: inherit;
    flex-direction: inherit;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  @media (min-width: 769px) {
    ._22lSF {
      padding: 0 1rem
    }
  }

  @media (min-width: 1281px) {
    ._22lSF {
      max-width: 120rem;
      padding: 0 2rem
    }
  }
  ._1B6X6 {
    padding: 0 !important;
    position: relative;
    margin-top: 0
  }
  @media (min-width: 1025px) {
    ._1B6X6 {
      margin-top: 2rem
    }
  }
  ._3U1yg {
    position: -webkit-sticky;
    position: sticky;
    z-index: 100;
    margin-bottom: 0;
    top: 80px;
    top: 5rem
  }
  ._2Qbas._3U1yg {
    z-index: 160
  }
  @media (min-width: 1025px) {
    ._3sbFq {
      display: none
    }

    ._3U1yg {
      position: static;
      margin-bottom: 2rem
    }

    ._1EisB {
      display: block
    }

    ._1g9Kj {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      top: auto;
      padding: 0;
      position: static
    }

    ._2l6I_ {
      display: none
    }
  }
  @media (max-width: 768px) {
    ._3U1yg {
      margin-left: -1rem;
      margin-right: -1rem
    }

    ._1g9Kj {
      background-color: #eee;
      padding-left: 2rem;
      padding-right: 2rem;
      -webkit-box-sizing: content-box;
      box-sizing: content-box
    }
  }
  ._1g9Kj {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    background-color: #fafafa;
    padding: 16px;
    padding: 1rem;
    border-radius: 0;
    position: relative;
    top: -1.6px;
    top: -.1rem
  }

  ._1g9Kj, ._-7eLQ {
    font-weight: 700;
    text-align: right;
    color: #202020
  }
  @media (min-width: 1025px) {
    ._3sbFq {
      display: none
    }

    ._3U1yg {
      position: static;
      margin-bottom: 2rem
    }

    ._1EisB {
      display: block
    }

    ._1g9Kj {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      top: auto;
      padding: 0;
      position: static
    }

    ._2l6I_ {
      display: none
    }
  }
  @media (max-width: 768px) {
    ._3U1yg {
      margin-left: -1rem;
      margin-right: -1rem
    }

    ._1g9Kj {
      background-color: #eee;
      padding-left: 2rem;
      padding-right: 2rem;
      -webkit-box-sizing: content-box;
      box-sizing: content-box
    }
  }
  ._1sKGv {
    font-size: 32px;
    font-size: 2rem;
    margin-left: 16px;
    margin-left: 1rem
  }
  ._3cbyZ {
    -webkit-box-orient: horizontal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-line-pack: justify;
    align-content: space-between
  }

  ._2bij7, ._3cbyZ {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
  }
</style>
