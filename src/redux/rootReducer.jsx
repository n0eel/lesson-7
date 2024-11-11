import { combineReducers } from "redux";
import { TodoReducer } from "./TodoReducer";
import { LikeReducer } from "./LikeReducer";


export const rootReducer = combineReducers({
    todo: TodoReducer,
    like: LikeReducer
})