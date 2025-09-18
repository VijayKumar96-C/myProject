import { LOAD_CELEBS, UPDATE_SCORE } from "./celebTypes";

const intialState = []


const celebReducer = (state = intialState, action) => {
    switch(action.type) {
        case LOAD_CELEBS : return action.payload

        case UPDATE_SCORE :  return state.map((ele)=>
          ele.id === action.payload.id ? {...ele, score:action.payload.score} : ele
        )

        default: return state
    }
}

export default celebReducer;