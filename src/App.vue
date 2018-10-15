<template>
  <div id="app">
    <router-link to="/home">go to homePage</router-link>
    <br>
    <router-link to="/about">go to About-Component</router-link>
    <br>
    <!-- <router-link to="/home">go to Home-Component</router-link> -->
    <router-view name="About"></router-view>
    <router-view name="Home"></router-view>
    
    <div class="frame">
      <h1>{{title}}</h1>
      <ul>
        <li v-for="(value , key , index) in student" :key="value">{{index + 1}} - {{key}} : {{value}}</li>
      </ul>
      <br>
      <span>{{followSonInput}}</span>
    </div>

    <hr>
    <input @input="$emit('input',$event.target.value)">
    <br>  
    <br>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
    <br>

    <hr>

    <div class="frame">
      <h1>is在tab页切换中的使用</h1>
      
      <button class="tab1" @click="clickTab" data-role="Tab1">tab1</button>
      <button class="tab2" @click="clickTab" data-role="Tab2">tab2</button>
      <keep-alive>
        <div class="tabFrame" :is="currentTab"></div>
      </keep-alive>
    </div>

    <hr>

  </div>
</template>

<script>

import Home from '@/views/Home.vue'
import Tab1 from '@/components/Tab1.vue'
import Tab2 from '@/components/Tab2.vue'

// let i = 1 ;
export default {
    name:'app',
    components:{
      Home,
      Tab1,
      Tab2,
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
    computed : {
      reversedMessage () {
        return this.msg.split('').reverse().join('')
      }
    },
    methods: {
      changeTitle (i) {
        this.title = '父组件 ' + i + 'times';
        // console.log(this.title);
      },
      input (e) {
        this.followSonInput = e;
      },
      clickTab (e) {
        this.currentTab = e.currentTarget.dataset.role
      }
    },
    created () {
      // console.log([...this.arr,...this.arr1,...this.arr2])
      // console.log(Object.prototype.toString.call(...this.arr))
    },
    provide () {
      return {
        changeTitle : this.changeTitle
      }
    }
}
</script>


<style scoped lang="less">
  #app{
    padding: 10px;
  }
  .frame{
    padding-left: 20px;
  }
  li{
    list-style:none;
  }
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
