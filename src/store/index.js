import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	level: '第一周', //活动周数
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	timer: '', //定时器
	itemDetail: [],
	answerid: [], //答案id
  floorData:[{
    "id": 20,
    "name": "一楼"
    },{
    "id": 21,
      "name": "二楼"
  }],
  bedData:[{
    "id": 20,
    "name": "101-1"
  },{
    "id": 21,
    "name": "101-1"
  }],
  floorId:0,
  username:'felix'
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})

/*
 *  每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：

 Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。s
 * */
