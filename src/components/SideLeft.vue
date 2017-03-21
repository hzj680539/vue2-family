<template>
  <div class="navbar">
    <ul>
      <li v-for="item in navbarList">
        <div class="level-one">{{item.name}}</div>
        <ul v-if="item.children && item.children.length">
          <li v-for="subitem in item.children">
            <div class="level-two">{{subitem.name}}</div>
          </li>
        </ul>
      </li>
    </ul>
    <div @click="add">Click</div>
  </div>
</template>

<script>
  import navbar from '../config/navbar'

  export default {
    data () {
      return {
        navbarList: navbar.navbarList
      }
    },
    methods: {
      add () {
        console.dir(this.navbarList)
      }
    }
  }
</script>

<style scoped>
  ul li {
    list-style: none;
  }
  .level-one {
    background: blue;
  }
</style>
