import {createStore,applyMiddleware,combineReducers} from 'redux'
import MainReducer from './Reducer'
import thunk from 'redux-thunk'

const Root=combineReducers({MainReducer})

const store=createStore(
    Root
    )
    export default store