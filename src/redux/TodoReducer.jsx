import { ACTIONS } from "./ACTIONS"



const initialState = JSON.parse(localStorage.getItem("todos")) || []

export const TodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.create: 
            return [...state, action.payload]
        case ACTIONS.delete : 
            const deleteIndex = state.todos.findIndex(item => item.age == action.payload)
            state.todos.splice(deleteIndex, 1)
            return [...state]
        case ACTIONS.update:
            const findToUpdate = state.todos.find(item => item.age == action.payload.age)
            findToUpdate.username = action.payload.newData.username
            findToUpdate.age = action.payload.newData.age
            return [...state]
        default: {
            return state    
        }
    }
}
