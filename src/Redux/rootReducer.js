import {combineReducers} from 'redux'
import celebReducer from './Celebs/celebReducer'

const rootReducer = combineReducers({
    celebs : celebReducer,
})

export default rootReducer;