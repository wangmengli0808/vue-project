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
            <button class="text-red" :class="{'active': btnText === '第一'}" @click="toLink('第一')">第一</button>
            <button class="text-red" :class="{'active': btnText === '第二'}" @click="toLink('第二')">第二</button>
            <button class="text-red" :class="{'active': btnText === '第三'}" @click="toLink('第三')">第三</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'authentic',
    data () {
      return {
        height: '',
        btnText: '第一'
      }
    },
    mounted () {
      this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    methods: {
      toLink (type) {
        this.btnText = type
        if (type === '第一') {
          this.$router.push('/authentic-one')
        } else if (type === '第二') {
          this.$router.push('/authentic-two')
        } else {
          this.$router.push('/authentic-three')
        }
      }
    }
  }
</script>

<style scoped>

</style>
