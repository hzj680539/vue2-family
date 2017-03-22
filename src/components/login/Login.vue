<template>
  <div class="login-box">
    <form @submit.prevent="submit">
      <div class="line">
        <p>用户登陆</p>
      </div>
      <div class="line">
        <input type="text" v-model="user.name" placeholder="请输入用户名">
      </div>
      <div class="line">
        <input type="password" v-model="user.password" placeholder="请输入密码">
      </div>
      <div class="line">
        <button>登陆</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNIN } from '../../store/user/user'
  export default {
    data () {
      return {
        user: {
          name: 'admin',
          password: '123'
        }
      }
    },
    methods: {
      ...mapActions([USER_SIGNIN]),
      submit () {
        if (!this.user.name || !this.user.password) return
        if (this.user.name === 'admin' && this.user.password === '123') {
          this.USER_SIGNIN(this.user)
          this.$router.replace({path: '/'})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-box {
    position: relative;
    top: 50vh;
    left: 50vw;
    width: 400px;
    height: 400px;
    transform: translate(-200px, -200px);
    background: lightblue;
    .line {
      padding: 10px;
    }
  }
</style>
