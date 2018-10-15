<template>
  <div class="home">
    <h1>{{msg}}</h1>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data () {
    return {
      msg:'首页'
    }
  },
  components: {
  },
  props:[
    // 'msg',
    'value'
  ],
}
</script>
