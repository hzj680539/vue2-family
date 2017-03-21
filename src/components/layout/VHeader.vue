<template>
  <header>
    <div>Header</div>
    <span>Hello: {{user.name}}</span>
    <span><a @click="signout" href="javascript:void(0)">退出</a></span>
  </header>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { USER_SIGNOUT } from '../../store/user/user'
  export default {
    computed: mapState({ user: state => state.user }),
    methods: {
      ...mapActions([USER_SIGNOUT]),
      signout () {
        this.USER_SIGNOUT(this.user)
        this.$router.replace({path: '/index'})
      }
    }
  }
</script>
