<template>
  <div class="navbar">
    <ul>
      <li v-for="item in navbarList">
        <div class="level-one" @click="changeStatus(item.id)"><router-link v-bind:to="item.path">{{item.name}}</router-link></div>
        <transition v-if="item.showChildren">
          <ul v-if="item.children && item.children.length">
            <li v-for="subitem in item.children">
              <div class="level-two"><router-link v-bind:to="item.path + subitem.path">{{subitem.name}}</router-link></div>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
  import navbar from '../../config/navbar'

  export default {
    data () {
      return {
        show: true,
        navbarList: navbar.navbarList
      }
    },
    methods: {
      changeStatus (id) {
        this.navbarList = this.navbarList.map((item) => {
          if (item.id === id) {
            item.showChildren = true
            return item
          } else {
            item.showChildren = false
            return item
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  ul li {
    list-style: none;
  }
  .level-one {
    background: green;
  }

</style>
