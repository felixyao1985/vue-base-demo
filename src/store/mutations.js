const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_FLOOR = 'GET_FLOOR'
const SET_FLOOR = 'SET_FLOOR'
const GET_BED_DATA = 'GET_BED_DATA'
export default {
	//点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
	},
	//记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	},
  [GET_FLOOR](state,res) {
    state.floorData = res;
  },
  [SET_FLOOR](state,id) {
    state.floorId = id;
  },
  [GET_BED_DATA](state,res) {
    state.bedData = res.domainInfoList;
  },
}
