<template>
	<div>
      <div class="left">
        <ul>
          <li @click="clickList" data-role="List1">list1</li>
          <li @click="clickList" data-role="List2">list2</li>
          <li @click="clickList" data-role="List3">list3</li>
        </ul>
      </div>
	  <keep-alive>
		  <div class="right" :is="currentList"></div>
	  </keep-alive>
	</div>
</template>

<script>
import List1 from '@/views/List1.vue'
import List2 from '@/views/List2.vue'
import List3 from '@/views/List3.vue'

export default {
	name:'Tab1',
	components:{
      List1,
      List2,
      List3
	},
	data () {
        return {
			currentList:'List1'
		}
	},
	methods : {
      clickList (e) {
        this.currentList = e.currentTarget.dataset.role
      }
	}
}
</script>

<style scoped lang="less">
    .left,.right{
      float: left;
    }
    .right{
      width: 70%;
    }
    .left{
      width: 30%;
      ul{
        padding-left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li{
          list-style:none;
          text-align: center;
          cursor: pointer;
        }
        li:hover{
          background-color: #eee;
        }
      }
    }
</style>


