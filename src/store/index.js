import {createStore,applyMiddleware} from '../redux';
import reducer from './reducer';

// let store = createStore(reducer);
// 日志中间件 重写store的dispatch方法
// let dispatch = store.dispatch;
/**
 * 缺点：
 * 1.希望可以方便对仓库进行扩展
 * 2.可以支持添加多个中间件
*/
/**
 * store.dispatch = function(action){
        console.log('老状态',store.getState());
        dispatch(action);
        console.log('新状态',store.getState());
    };
 */

// 获取仓库状态  派发动作 调用下一个中间价 action

let logger1 = function({dispatch,getState}){
    return function(next){
        return function(action){
            console.log('老状态1',getState());
            next(action);// 派发动作
            console.log('新状态1',store.getState());
        }
    }
}

let logger2 = function({dispatch,getState}){
    return function(next){
        return function(action){
            console.log('老状态2',getState());
            next(action);// 派发动作
            console.log('新状态2',store.getState());
        }
    }
}

let store = applyMiddleware(logger1,logger2)(createStore)(reducer);

window.store = store;
export default store;