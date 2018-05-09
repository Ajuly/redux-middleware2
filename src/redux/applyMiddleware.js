import compose from './compose'
export default function(...middlewares){
    return function(createStore){
        return function(reducer){
            let store = createStore(reducer);
            let dispatch;
            let middlewareAPI = {
                getState:store.getState,
                dispatch:action => dispatch(action)
            }
            middlewares = middlewares.map(middleware => middleware(middlewareAPI));

            dispatch = compose(...middlewares)(store.dispatch);
            // 用新的dispatch去覆盖老的dispatch
            return {...store,dispatch};
        }
    }
}