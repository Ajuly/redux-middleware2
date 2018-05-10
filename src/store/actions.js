// 默认导出actionCreator
import * as types from './action-types';

export default{
    increment(){
        return {type:types.INCREMENT,payload:1}
    },
    // 过一秒加一
    thunkIncrement(){
        return function(dispatch,getState){
            setTimeout(() => {
                dispatch({type:types.INCREMENT,payload:1});
            }, 1000);
        }
    },
    promiseIncrement(){
        return new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve({type:types.INCREMENT,payload:1});
            }, 1000);
        });
    },
    payloadIncrement(){
        return {
            type:types.INCREMENT,
            payload:new Promise(function(resolve,reject){
                setTimeout(() => {
                    if(Math.random() > .5){
                        resolve(100);
                    }else{
                        reject(-50);
                    }
                }, 1000);
            })
        }
    }
}