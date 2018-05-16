<template functional>
  <div>
    <el-button @click="data.on.click">{{props.name}}</el-button>
    <p>{{data}}</p>
  </div>
</template>
<script>
  export default {
    name: 'Render03',
    props: {
      name: String
    },
    data () {
      return {
        props: {
          type: 'primary',
          size: 'mini'
        },
        class: {
          btn: true
        },
        style: {
          marginTop: '10px'
        },
        on: {
          click: () => {
            console.log(123)
          }
        }
      }
    }
  }
</script>