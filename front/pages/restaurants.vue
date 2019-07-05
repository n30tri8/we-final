<template>
  <div id="main">
    <div id="upper-food-banner"></div>
    <div id="current-place-div1">
      <div id="current-place-div2">
        <div id="current-place-div3">
          <h1>
            <span>{{translate_number(rests.length)}} رستوران امکان سرویس دهی به</span>
            <span id="current-place-select-span">{{rests[0].address.city}}، {{rests[0].address.area}}، {{rests[0].address.addressLine}}</span>
            <span>را دارند</span>
          </h1>
        </div>
      </div>
    </div>
    <div id="search-place-div1">
      <div id="search-place-div2">
        <div id="search-place-div3">
          <input id="search-place-input-txt" name="restaurant-name" placeholder="جست‌و‌‌جوی رستوران‌ در این محدوده" value="" v-model.trim="filtered_city"/>
          <div id="search-place-icon-div">
            <span id="search-place-icon-span">
              <svg viewBox="0 0 18 18" class="_32USF"><g fill="none" fill-rule="evenodd"><path d="M0 0h18v18H0z"></path><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(2 2)"><circle cx="6.125" cy="6.125" r="6.125"></circle><path d="M13.373 13.373l-2.767-2.767"></path></g><path d="M0 0h18v18H0z"></path></g></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="main-section">
      <div id="side-bar">
        <div id="branch-search-div">
          <label id="branch-search-label" for="branchNameSearch">فیلتر بر اساس انواع غذا</label>
        </div>
        <div id="branch-search-div2">
          <input placeholder="جست‌و‌‌جوی دسته‌بندی غذاها" id="branchNameSearch" value="" v-model.trim="filter_cat">
        </div>
        <div id="selected-branch-div">
          <CategorySelect v-for="item in selected_cats" v-bind:key="item.id" v-bind:category="item" v-bind:selected="1" v-on:toggle-box="toggleCategory"/>
        </div>
        <div id="all-branch-div">
          <CategorySelect v-for="item in filtered_cats" v-bind:key="item.id" v-bind:category="item" v-bind:selected="0" v-on:toggle-box="toggleCategory"/>
        </div>
      </div>
      <div id="rests-placeholder">
        <div class="rests-list">
          <RestLink v-for="item in filtered_rests" v-bind:key="item.id" v-bind:info="item" v-bind:open="1" v-if="item.openingTime <= cu_time && item.closingTime >= cu_time"/>
        </div>
        <p id="closed-rests-p">رستوران های بسته</p>
        <div class="rests-list">
          <RestLink v-for="item in filtered_rests" v-bind:key="item.id" v-bind:info="item" v-bind:open="0" v-if="item.openingTime > cu_time || item.closingTime < cu_time"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import util from '../assets/js/util'
var _ = require('lodash/core');
import RestLink from '../components/RestLink'
import CategorySelect from '../components/CategorySelect'

export default {
  components: {
    RestLink,
    CategorySelect
  },
  name: 'Restaurants',
  data() {
    return {
      rests: [
        {
          "id": "dummy",
          "name": "dummy",
          "logo": "default.jpeg",
          "openingTime": 9,
          "closingTime": 22,
          "address": "d",
          "categories": [
            "d",
            "d"
          ],
          "foods": [
            "d",
            "d"
          ],
          "comments": [
            "d",
            "d",
            "d"
          ],
          "total_rating": 45,
          "averageRate": 5
        }
      ],
      filtered_city: '',
      cu_time: 10,
      filter_cat: '',
      cats: [
        {
          "id": "d",
          "name": "dummy"
        }
      ],
      selected_cats: [
        {
          "id": "d",
          "name": "dummy"
        }
      ]
    };
  },
  computed: {
    filtered_rests: function () {
      let upper = this.filtered_city;
      let selected_ids = [];
      this.selected_cats.forEach(function (item) {
        selected_ids.push(item.id);
      });
      return this.rests.filter(function (rest) {
        let c1 = rest.name.includes(upper);
        if(!c1){
          return false;
        }
        if(selected_ids.length === 0){
          return true;
        }
        for (let i=0; i < rest.categories.length; i++){
          if(selected_ids.includes(rest.categories[i].id)){
            return true;
          }
        }
        return false;
      });

    },
    filtered_cats: function () {
      let upper = this.filter_cat;
      return this.cats.filter(function (category) {
        return category.name.includes(upper);
      })
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    };
    try {
      // console.log(this.$route.query);
      //'restaurants?area=ولی عصر&category=غذای ایرانی'
      const res = await axios.get('http://localhost:3001/api' + this.$route.fullPath, config);
      this.rests = res.data;
      //collect of categories
      this.cats = [];
      this.selected_cats = [];
      let upper = this.cats;
      res.data.forEach(function (item) {
        item.categories.forEach(function (category) {
          let found = false;
          for(let i = 0; i < upper.length; i++) {
            if (upper[i].id === category.id) {
              found = true;
              break;
            }
          }
          if(!found){
            upper.push(_.clone(category));
          }
        });
      });
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    translate_number: function (eng_num) {
      return util.translate_number(eng_num);
    },
    toggleCategory : function (id) {
      let tmp = this.cats.find(function( cat ) {
        return cat.id === id;
      });
      if(tmp){
        this.cats = this.cats.filter(function( cat ) {
          return cat.id !== id;
        });
        this.selected_cats = this.selected_cats.concat(tmp);
      }
      else {
        tmp = this.selected_cats.find(function( cat ) {
          return cat.id === id;
        });
        this.selected_cats = this.selected_cats.filter(function( cat ) {
          return cat.id !== id;
        });
        this.cats = this.cats.concat(tmp);
      }

    }
  }
}
</script>

<style scoped>
  #main{
    background-color: #fafafa;
    border-radius: .4rem;
  }
  #upper-food-banner{
    height: 250px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(../assets/img/restaurant-search-banner-2x.jpg);
  }
  #current-place-div1{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    top: 120px;
    top: 7.5rem;
    height: 128px;
    height: 8rem;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    padding-right: 16px;
    padding-right: 1rem;
    border-bottom: 1.6px solid #e2e2e2;
    border-bottom: .1rem solid #e2e2e2;
  }
  #current-place-div2{
    max-width: 2048px;
    max-width: 128rem;
    margin: 0 auto;
    -ms-flex-item-align: center;
    align-self: center;
    width: 100%;
    position: relative;
  }
  #current-place-div3{
    max-width: 120rem;
    padding: 0 2rem;
    margin: 0 auto;
    display: inherit;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: inherit;
    flex-direction: inherit;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  h1{
    font-size: 1.5rem;
    font-weight: 400;
  }
  #current-place-select-span{
    font-weight: 700;
    margin: 0 16px;
    margin: 0 1rem;
    cursor: pointer;
    border-bottom: 1.6px dotted #4a4a4a;
    border-bottom: .1rem dotted #4a4a4a;
  }
  #search-place-div1{
    background-color: #fff;
    padding: 0.5rem 3.5rem;
  }
  #search-place-div2{
    background-color: #fff;
    -webkit-transition: right .2s;
    -o-transition: right .2s;
    transition: right .2s;
    overflow: visible;
    width: 100%;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  #search-place-div3{
    padding-bottom: 20px;
    -ms-flex-preferred-size: 45%;
    flex-basis: 45%;
    position: relative;
  }
  #search-place-input-txt{
    font-size: 1.4rem;
    font-weight: 700;
    padding: 8px 16px 8px 8px;
    padding: .5rem 1rem .5rem .5rem;
    display: block;
    border: 1.6px solid #e2e2e2;
    border: .1rem solid #e2e2e2;
    border-radius: .4rem;
    width: 100%;
    height: 4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fafafa;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #202020;
    padding-right: 56px;
    padding-right: 3.5rem;
    font-family: Shabnam;
  }
  #search-place-icon-div{
    position: absolute;
    width: 24px!important;
    width: 1.5rem!important;
    color: #777!important;
    height: auto;
    right: 17px;
    margin: auto;
    top: 0;
    bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 8px;
    padding: 0 .5rem;
  }
  #search-place-icon-span{
    display: inline-block;
    line-height: 0;
    width: 24px!important;
    width: 1.5rem!important;
    height: 24px!important;
    height: 1.5rem!important;
  }
  #main-section{
    margin: 3rem auto;
    padding: 4rem;
    max-width: 125rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  #side-bar{
    width: 20%;
    overflow: hidden;
    height: 100%;
    margin-left: 3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #e2e2e2;
    border-radius: .5rem;
    background-color: #fff;
  }
  #branch-search-div{
    width: 100%;
    padding: 4.8px 0;
    padding: .3rem 0;
    border-bottom: 1px solid #e2e2e2;
  }
  #branch-search-label{
    font-size: 10px;
    color: #777;
    padding-right: 11.2px;
    padding-right: .7rem;
    outline: none;
  }
  #branch-search-div2{
    background-color: #fafafa;
    width: 92%;
    height: 54.4px;
    height: 3.4rem;
    margin: 1rem 5px;
  }
  #branchNameSearch{
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    border: 1px solid #e7e7e7;
    outline: none;
    cursor: text;
    background-color: #fafafa;
    font-family: Shabnam;
    padding: 0px 5px;
  }
  #rests-placeholder{
    width: calc(100% - 27rem);
  }
  #closed-rests-p{
    font-size: 32px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #191919;
    margin: 128px 16px 32px 0;
    margin: 8rem 1rem 2rem 0;
  }
  .rests-list{
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 100%;
  }
  #all-branch-div{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
  }
  #selected-branch-div{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    border-bottom: #7f828b solid 2px;
  }
</style>
