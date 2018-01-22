<template>
    <div class="login">
        <div class="login-box">
            <img class="login-box-logo" src="/static/images/logo.png" alt="login">
        </div>
        <div class="weui-cells weui-cells_form login-content">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">账号:</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">密码:</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入密码">
                </div>
            </div>
        </div>
        <div class="login-btn">
            <a href="javascript:void(0);" @click="toHome" class="weui-btn weui-btn_primary">登录</a>
            <p class="login-btn-forget" @click="getList">忘记密码？</p>
        </div>

        <!--跳转传值-->
        <router-link to="/test">
            <button class="text-default text-bd-default">跳转（组件）</button>
        </router-link>

        <div style="margin: 10px 0;">
            <button class="text-default text-bd-default" @click="toAnother">认证步骤</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Login',
        firstName: 'Foo',
        lastName: 'Bar'
      }
    },
    computed: {
      /*
      // 计算属性
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.msg.split('').reverse().join('')
      },
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
      */
    },
    mounted () {

    },
    methods: {
      getList () {
        /* this.$http.get('../static/resource/data.json').then((response) => {
          console.log(response)
        }) */
      },
      toHome () {
        this.$router.push({path: '/home', query: {id: '111'}})
      },
      toAnother () {
        this.$router.push('/authentic')
      }
    }
  }
</script>

<style scoped>
    .login {
        text-align: center;
    }

    .login-box {
        padding-top: 50px;
        padding-bottom: 16px;
    }

    .login-box-logo {
        width: 30%;
    }

    .login-content.weui-cells:before {
        content: normal;
    }

    .login-content .weui-cell:before {
        left: 0;
    }

    .login-btn {
        margin: 30px 0 20px;
    }

    .login-btn-forget {
        margin-top: 10px;
    }
</style>
