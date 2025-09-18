import { LOAD_CELEBS, UPDATE_SCORE } from "./celebTypes";

export const loadActors = (celebs)=> ({
    type : LOAD_CELEBS,
    payload : celebs
})

export const updateScoreById = (id, score) => ({
    type : UPDATE_SCORE,
    payload : {id, score}
})