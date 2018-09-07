import {
  getFloorData
} from '../service/getData'

export default {
	addNum({ commit, state }, id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	//初始化信息
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	},
  async getFloor({ commit, state }) {
    var params={"parameters":{}}
    params["parameters"]["domainId"]= 52;
    var data		= {};
    data.payload    =  JSON.stringify(params);
    //data.cmd		= 'GET_FLOORS';
    data.cmd		= 'GET_PRIVINCE_CITY_DOMAIN';
    let res = await getFloorData(data);
    commit('GET_FLOOR', res);
  },
  setFloor({ commit, state },id) {
    console.log(id);
    commit('SET_FLOOR',id);
  },
}
