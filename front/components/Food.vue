<template>
    <div class="_2bij7" >
      <div role="presentation" class="Du9Q8" >
        <div class="_2HXOd" >
          <div class="_3IyAv" >
            <p class="_1i80a">{{name}}</p>
          </div>
          <div class="wpuyR" >
            <div class=""
            ><p class="_1rbx3"

                link_path
            >
              {{price}}</p><span link_path class="_2QPvd"
            >تومان</span>
            </div>
          </div>
        </div>
        <div class="_2NDXG" >
          <div class="_1T8bE" >
            <div class="_2QxAj" >{{description}}</div>
            <div class="_1WkdD" >
              <div class="_1-EXF" >
                <button class="_2btQX _2j7gc RDn-N" ><span
                  class="_3duBh" >+</span><span
                  class="_2OCR-"
                >افزودن به سبد خرید</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Food",
      props: ['name', 'description', 'price']
    }
</script>

<style scoped>
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
  ._2bij7, ._3cbyZ {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
  }

  ._2bij7 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin-bottom: 0;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  ._2bij7:nth-of-type(odd) {
    padding-left: 0
  }

  ._2bij7:nth-of-type(2n) {
    padding-right: 0
  }

  @media (min-width: 769px) {
    ._2bij7 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      margin-bottom: 2rem
    }

    ._2bij7:nth-of-type(odd) {
      padding-left: 1rem
    }

    ._2bij7:nth-of-type(2n) {
      padding-right: 1rem
    }
  }
  .Du9Q8 {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 24px;
    padding: 1.5rem;
    border-bottom: 1.6px solid #e9e9e9;
    border-bottom: .1rem solid #e9e9e9;
    -webkit-transition: -webkit-box-shadow .2s;
    transition: -webkit-box-shadow .2s;
    -o-transition: box-shadow .2s;
    transition: box-shadow .2s;
    transition: box-shadow .2s, -webkit-box-shadow .2s;
    cursor: pointer;
    border-radius: .5rem;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .Du9Q8:before {
    content: "";
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 0;
    width: 6.4px;
    width: .4rem;
    background: -webkit-gradient(linear, left top, left bottom, from(#8b00af), to(#d40062));
    background: -webkit-linear-gradient(top, #8b00af, #d40062);
    background: -o-linear-gradient(top, #8b00af 0, #d40062 100%);
    background: linear-gradient(180deg, #8b00af 0, #d40062);
    -webkit-transition: all .1s;
    -o-transition: all .1s;
    transition: all .1s
  }

  .Du9Q8:hover {
    -webkit-box-shadow: 0 .3rem 2rem rgba(0, 0, 0, .2);
    box-shadow: 0 .3rem 2rem rgba(0, 0, 0, .2);
    -webkit-transition: all .17s ease-in-out;
    -o-transition: all .17s ease-in-out;
    transition: all .17s ease-in-out
  }

  .Du9Q8:hover ._1MYpZ {
    background-color: #d40062;
    color: #fff;
    border-color: #d40062
  }
  @media (min-width: 769px) {
    .Du9Q8 {
      -webkit-box-shadow: 0 .4rem .5rem 0 rgba(0, 0, 0, .05);
      box-shadow: 0 .4rem .5rem 0 rgba(0, 0, 0, .05)
    }

    ._1dZpp, ._1dZpp:hover {
      -webkit-box-shadow: inset 0 .01rem .3rem 0 rgba(0, 0, 0, .27);
      box-shadow: inset 0 .01rem .3rem 0 rgba(0, 0, 0, .27)
    }
  }
  @media (min-width: 1025px) {
    ._2W0yA {
      width: 100%;
      height: 100%;
      opacity: 0
    }

    ._3b203 {
      width: 3rem !important;
      height: 3rem !important
    }

    .Du9Q8:hover ._2W0yA {
      opacity: 1;
      -webkit-transition: opacity .3s;
      -o-transition: opacity .3s;
      transition: opacity .3s
    }
  }

  @media (max-width: 768px) {
    .Du9Q8 {
      margin-bottom: 1rem
    }
  }
  ._2HXOd {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  ._3IyAv {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%
  }
  ._1i80a, .a8Q-T {
    display: inline-block;
    font-weight: 700
  }

  ._1i80a {
    font-size: 14px
  }
  .wpuyR {
    padding-right: 16px;
    padding-right: 1rem;
    font-weight: 700
  }
  ._1rbx3 {
    display: inline-block
  }
  ._290Fc ._1rbx3 {
    display: inline-block;
    position: relative;
    top: 6.4px;
    top: .4rem
  }
  ._2QPvd {
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    margin-right: 3.2px;
    margin-right: .2rem
  }
  ._290Fc ._2QPvd {
    display: inline-block;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    font-size: 17.6px;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.82;
    text-align: left;
    margin-right: 0
  }
  ._2NDXG {
    height: 100%
  }

  ._1T8bE, ._2NDXG {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  ._1T8bE, ._2NDXG {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  ._1T8bE {
    margin-left: 16px;
    margin-left: 1rem;
    width: 100%;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }
  ._2QxAj {
    color: #9b9b9b;
    font-size: 19.2px;
    font-size: 1.2rem;
    margin-bottom: auto;
    max-height: 64px;
    max-height: 4rem;
    overflow: hidden;
    width: 100%;
    line-height: 32px;
    line-height: 2rem;
    position: relative
  }

  ._2QxAj:after {
    content: "";
    display: block;
    position: absolute;
    background: -webkit-gradient(linear, left top, right top, color-stop(30%, #fff), to(hsla(0, 0%, 100%, 0)));
    background: -webkit-linear-gradient(left, #fff 30%, hsla(0, 0%, 100%, 0));
    background: -o-linear-gradient(left, #fff 30%, hsla(0, 0%, 100%, 0) 100%);
    background: linear-gradient(90deg, #fff 30%, hsla(0, 0%, 100%, 0));
    bottom: 0;
    left: 0;
    height: 28.8px;
    height: 1.8rem;
    width: 80px;
    width: 5rem
  }

  ._1dZpp ._2QxAj:after {
    background: -webkit-gradient(linear, left top, right top, color-stop(30%, #f3f3f3), to(hsla(0, 0%, 100%, 0)));
    background: -webkit-linear-gradient(left, #f3f3f3 30%, hsla(0, 0%, 100%, 0));
    background: -o-linear-gradient(left, #f3f3f3 30%, hsla(0, 0%, 100%, 0) 100%);
    background: linear-gradient(90deg, #f3f3f3 30%, hsla(0, 0%, 100%, 0))
  }
  ._1WkdD {
    margin-top: 19.2px;
    margin-top: 1.2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
  }
  ._1-EXF {
    border-radius: 5rem;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: 176px;
    width: 11rem;
    position: relative
  }

  ._1-EXF, ._2btQX {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 44.8px;
    height: 2.8rem
  }
  @media (min-width: 769px) {
    ._1-EXF {
      border-radius: 5rem;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 11rem
    }
  }
  ._1-EXF, ._2btQX {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 44.8px;
    height: 2.8rem
  }

  ._2btQX {
    font-size: 30.4px;
    font-size: 1.9rem;
    color: #d40062;
    outline: none;
    background-color: transparent;
    font-weight: 400;
    cursor: pointer;
    position: absolute;
    top: 0;
    width: 44.8px;
    width: 2.8rem;
    border: 1.6px solid #ffe9f3;
    border: .1rem solid #ffe9f3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 0;
    border-radius: 2rem;
    -webkit-transition: width .3s;
    -o-transition: width .3s;
    transition: width .3s
  }

  ._2btQX:hover {
    background-color: #d40062;
    color: #fff
  }
  ._2btQX:disabled {
    color: #e9e9e9
  }
  .P2BkQ:hover ~ ._2j7gc {
    background-color: transparent !important;
    color: #d40062 !important;
    border: 1px solid #ffe9f3 !important
  }

  ._2j7gc {
    right: 0
  }
  ._2EpRH .P2BkQ:hover ~ ._2j7gc {
    background-color: transparent !important;
    color: #9b9b9b !important;
    border: 1px solid #9b9b9b !important
  }
  .RDn-N {
    border-radius: 4rem;
    width: 192px;
    width: 12rem
  }

  .RDn-N ._2OCR- {
    opacity: 1;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 132.8px;
    width: 8.3rem;
    height: 32px;
    height: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  ._3duBh {
    position: relative;
    top: 2.4px;
    top: .15rem
  }
  ._2OCR- {
    font-size: 16px;
    font-size: 1rem;
    margin-right: 12.8px;
    margin-right: .8rem;
    opacity: 0;
    display: none
  }
</style>

