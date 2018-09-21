<template>
  <div class="home">
    <h1>子组件</h1>
    <!-- <button v-on:click="$emit('changeSpan')">button</button> -->
    <p>{{msg}}</p>
    <button v-on:click="$emit('changeTitle',1)">改变标题</button>
    <input @input="$emit('input',$event.target.value)">
    <br>  
    <br>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src

let commonBtn = {
  data () {
    return {
      msg2 : '这是一个mixin'
    }
  }
}

export default {
  name: 'home',
  components: {
  },
  props:[
    'msg',
    'value'
  ],
}
</script>
