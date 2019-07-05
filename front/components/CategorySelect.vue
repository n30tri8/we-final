<template>
  <div class="outer">
    <div class="fieldset">
      <input type="checkbox" class="checkbox" :checked="selected == 1" @change="filter_cat">
      <label class="checkbox-label"></label>
    </div>
    <label class="cat-name-label">
      <span class="cat-name-span">{{category.name}}</span>
    </label>
  </div>
    
</template>

<script>
    export default {
        name: "CategorySelect",
        props: ['category', 'selected'],
        methods: {
          filter_cat(){
            this.$emit('toggle-box', this.category.id);
          }
        },

    }

</script>

<style scoped>
  .outer{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    -webkit-transition: background-color .3s ease;
    -o-transition: background-color .3s ease;
    transition: background-color .3s ease;
    position: relative;
    overflow: hidden;
    border-bottom: 1.6px solid #eee;
    border-bottom: .1rem solid #eee;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .fieldset{
    position: absolute!important;
    right: 17.6px!important;
    right: 1.1rem!important;
    top: 36.8px!important;
    top: 2.3rem!important;
    margin-top: -16px!important;
    margin-top: -1rem!important;
    width: 1.7rem;
    height: 1.7rem;
  }
  .checkbox{
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .checkbox-label{
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background: #fff;
    border-radius: .4rem;
    border: 1.6px solid #cbcbcb;
    border: .1rem solid #cbcbcb;
  }
  .checkbox-label::after{
    content: "";
    width: 14.4px;
    width: .9rem;
    height: 8px;
    height: .5rem;
    position: absolute;
    top: 8px;
    top: .5rem;
    left: 6.4px;
    left: .4rem;
    border: 1.6px solid #fff;
    border: .1rem solid #fff;
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .cat-name-label{
    cursor: pointer;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 65.6px 0 0;
    padding: 0 4.1rem 0 0;
    font-size: 24px;
    font-size: 1.5rem;
    color: #202020;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 100%;
    line-height: 75.2px;
    line-height: 4.7rem;
  }
  .cat-name-span{
    display: inline-block;
    pointer-events: none;
  }
  .checkbox[type=checkbox]:checked+.checkbox-label::after{
    opacity: 1;
  }
  .checkbox[type=checkbox]:checked+.checkbox-label{
    background-color: #d40062;
    border-color: #d40062;
    -webkit-box-shadow: 0 0.2rem 0.4rem 0 rgba(0,0,0,.11);
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0,0,0,.11);
  }

</style>
