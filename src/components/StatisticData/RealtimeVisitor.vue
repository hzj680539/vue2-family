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
        data: '',
        postData: {
          cmd: 'i5service/common/divisionList',
          rows: 10,
          parameters:
          {
            iToken: '6f674ef8-3e12-41fd-953c-a3c05300314f',
            parentId: 1
          }
        }
      }
    },
    mounted () {
      Vue.AxiosHelper(this.postData, (data) => {
        this.data = data
        console.dir(data.response)
      })
    }
  }

</script>
