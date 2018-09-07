import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'


/**
 * 获取楼层
 */
//export const getFloorData = (res) => fetch('GET','/icare/z4',res,{},'json');
export const getFloorData = (res) => fetch('GET','/icare/dish',res,{},'json');
