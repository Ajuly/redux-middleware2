// 默认导出actionCreator
import * as types from './action-types';

export default{
    increment(){
        return {type:types.INCREMENT,payload:1}
    }
}