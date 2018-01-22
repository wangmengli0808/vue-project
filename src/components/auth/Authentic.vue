<template>
    <div class="auth">
        <div class="auth-header">
            <div>
                <p>福晟国际</p>
                <p>2号楼2单元2室</p>
            </div>
            <p class="tips">*信息仅用于业主认证，房信保障您的信息安全</p>
        </div>

        <div :style="{'height': height - 135 + 'px', 'overflow-y': 'auto'}">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <div class="auth-bottom">
            <button class="text-red text-bg-red" @click="toFirst">第一</button>
            <button class="text-red text-bd-red" @click="toSecond">第二</button>
            <button class="text-red text-bd-red" @click="toThird">第三</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'authentic',
    data () {
      return {
        height: ''
      }
    },
    mounted () {
      this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    methods: {
      toFirst () {
        this.$router.push('/authentic-one')
      },
      toSecond () {
        this.$router.push('/authentic-two')
      },
      toThird () {
        this.$router.push('/authentic-three')
      }
    }
  }
</script>

<style scoped>

</style>
