<template>
  <div id="app">
    <h1>{{title}}</h1>
    <!-- <span :value="textValue"></span> -->
    <!-- <h1>{{msg}}</h1> -->
    <ul>
      <li v-for="(value , key , index) in student" :key="value">{{index + 1}} - {{key}} : {{value}}</li>
    </ul>
    <br>
    <span>{{followSonInput}}</span>
    <hr>
    <Home msg="xiaoxi" @changeTitle="changeTitle" @input="input">
      <!-- 插槽 -->
      <h1 slot="header">头部插槽</h1>
      <span>默认内容插槽</span>
      <h3 slot="footer">底部插槽</h3>
    </Home>

    <hr>
    <h1>is在tab页切换中的使用</h1>
    <!-- is在tab页切换中的使用 -->
    <button class="tab1" @click="clickTab" data-role="Tab1">tab1</button>
    <button class="tab2" @click="clickTab" data-role="Tab2">tab2</button>
    <keep-alive>
      <div class="tabFrame" :is="currentTab"></div>
    </keep-alive>
    <hr>

  </div>
</template>

<script>

import Home from '@/views/Home.vue'
import Tab1 from '@/views/Tab1.vue'
import Tab2 from '@/views/Tab2.vue'


// let i = 1 ;
export default {
    name:'app',
    components:{
      Home,
      Tab1,
      Tab2
    },
    data () {
      return {
        title:'父组件',
        student:{
          name:'jack',
          age:'20',
          grade:'three'
        },
        msg:'hello vue!',
        followSonInput:'跟随下方子组件input变化',

        arr:['1','23','4','5','65','32'],
        arr1:['dsa','wqd'],
        arr2:['的撒','带我去带我去的'],
        currentTab:'Tab1'
      }
    },
    methods: {
      changeTitle (i) {
        this.title = '父组件 ' + i + 'times';
      },
      input (e) {
        this.followSonInput = e;
      },
      clickTab (e) {
        this.currentTab = e.currentTarget.dataset.role
      }
      // changeSpan () {
      //   textValue = 
      // }
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    },
    created () {
      console.log([...this.arr,...this.arr1,...this.arr2])
      console.log(Object.prototype.toString.call(...this.arr))
    }
}
</script>


<style scoped lang="less">
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
} */
  .tab1,.tab2{
    cursor: pointer;
    background-color: #fff;
    padding: 5px 12px;
    outline: none;
    border: 1px solid #000;
    border-bottom: none;
  }
  .tab1{
    margin-left: 20px;
    border-top-left-radius: 5px;
    border-right: none;
  }
  .tab2{
    border-top-right-radius: 5px;
  }
  .tab1:hover,.tab2:hover{
    background-color: #aaaaaa;
  }
  .tabFrame{
    margin-left: 20px;
    border: 1px solid #000;
    width: 400px;
    padding: 5px;
    overflow: hidden;
  }
</style>
