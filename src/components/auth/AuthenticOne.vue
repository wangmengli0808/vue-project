<template>
    <div class="auth-box" style="text-align: center;">
        <div>搜索过滤</div>
        <input v-model='search'/>
        <ul v-if="searchData.length > 0">
            <li v-for="item in searchData">{{item.name}},价格:￥{{item.price}}</li>
        </ul>
        <div v-else>暂无数据</div>
    </div>
</template>

<script>
  export default {
    name: 'authentic-one',
    data () {
      return {
        search: '',
        products: [
          {
            name: '苹果',
            price: 25,
            category: '水果'
          },
          {
            name: '香蕉',
            price: 15,
            category: '水果'
          },
          {
            name: '雪梨',
            price: 65,
            category: '水果'
          },
          {
            name: '宝马',
            price: 2500,
            category: '汽车'
          },
          {
            name: '奔驰',
            price: 10025,
            category: '汽车'
          },
          {
            name: '柑橘',
            price: 15,
            category: '汽车'
          },
          {
            name: '奥迪',
            price: 25,
            category: '汽车'
          }
        ]
      }
    },
    mounted () {

    },
    methods: {
    },
    computed: {
      searchData () {
        let search = this.search

        if (search) {
          return this.products.filter(function (product) {
            return Object.keys(product).some(function (key) {
              return String(product[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }

        return this.products
      }
    }
  }
</script>

<style scoped>

</style>
