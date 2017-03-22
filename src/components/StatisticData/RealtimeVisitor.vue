<template>
  <div>
    <h1>RealtimeVisitor</h1>
    <h3>{{data}}</h3>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        data: ''
      }
    },
    mounted () {
      console.log('coming')
      let postData = '{"cmd":"i5service/organization/readPage","rows":10,"parameters":{"name":"","parentId":"","managerName":"","level":1,"status":1,"iToken":"6f674ef8-3e12-41fd-953c-a3c05300314f"}}'
      Vue.axios(postData, (data) => {
        console.info('data:')
        console.dir(data)
        this.data = data
      })
    }
  }

</script>
