import {
  getFloorData
} from '../service/getData'

/*
*  store action 方法接收，并dispatch给 mutations
* */
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
    let ret = await getFloorData(data);
    let res = [];
    if(ret.code==0) {
      var jsonProvince = ret.provinces;
      if(jsonProvince.length > 0 ) {
        for(let i =0;i<jsonProvince.length;i++) {
          let jsoncityInfos = jsonProvince[i].cityInfos;
          if(jsoncityInfos.length > 0 ) {
            for(let t =0;t<jsoncityInfos.length;t++) {
              let item = jsoncityInfos[t];
              res.push(item);
            }
          }

        };
      }

    }else{
    }

    commit('GET_FLOOR', res);
  },
  setFloor({ commit, state },id) {

    commit('SET_FLOOR',id);
  },
  async getBedData({ commit, state },id) {
    var params={"parameters":{}}
    params["parameters"]["domainId"]= 52;
    var data		= {};
    data.payload    =  JSON.stringify(params);
    //data.cmd		= 'GET_FLOORS';
    data.cmd		= 'GET_PRIVINCE_CITY_DOMAIN';
    let ret = await getFloorData(data);
    let res = [];
    if(ret.code==0) {
      var jsonProvince = ret.provinces;
      if(jsonProvince.length > 0 ) {
        for(let i =0;i<jsonProvince.length;i++) {
          let jsoncityInfos = jsonProvince[i].cityInfos;
          if(jsoncityInfos.length > 0 ) {
            for(let t =0;t<jsoncityInfos.length;t++) {
              let item = jsoncityInfos[t];
              if(item.id == id){
                commit('GET_BED_DATA', item);
                break;
              }
            }
          }

        };
      }

    }else{
    }

  },
}
