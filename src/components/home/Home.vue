<template>
  <div class="home">
    <div class="search clearfix">
      <choice-city></choice-city>

      <div class="fr search-input">
        <input type="search" placeholder="请输入区域、小区关键字">
        <i class="weui-icon-search"></i>
      </div>
    </div>

    <div class="main">
      <div class="weui-grids">
        <a href="javascript:;" class="weui-grid" v-for="item in grids" @click="toDetail(item)">
          <div class="weui-grid__icon">
            <img :src="item.src" alt="">
          </div>
          <p class="weui-grid__label">{{item.label}}</p>
        </a>
      </div>

      <div class="recommend">
        <span>推荐房源</span>
      </div>


    </div>
  </div>
</template>

<script>
  import ChoiceCity from '../common/ChoiceCity.vue'

  export default {
    components: {
      ChoiceCity
    },
    data () {
      return {
        grids: [
          {
            id: 10001,
            src: '/static/images/logo.png',
            label: '二手房'
          },
          {
            id: 10002,
            src: '/static/images/logo.png',
            label: '租房'
          },
          {
            id: 10003,
            src: '/static/images/logo.png',
            label: '地图找房'
          },
          {
            id: 10004,
            src: '/static/images/logo.png',
            label: '登记房源'
          },
          {
            id: 10005,
            src: '/static/images/logo.png',
            label: '委托找房'
          },
          {
            id: 10006,
            src: '/static/images/logo.png',
            label: '个人中心'
          }
        ]
      }
    },
    beforeCreate () {
//      alert(111)
    },
    created () {
//      alert(222)
    },
    beforeMount () {
//      alert(333)
    },
    mounted () {
//      alert(444)
    },
    methods: {
      toDetail (item) {
        this.$router.push({path: '/detail', query: item})
      }
    }
  }
</script>

