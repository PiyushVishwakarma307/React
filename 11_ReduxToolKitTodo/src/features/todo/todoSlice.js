import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.find(todo => todo.id ===  action.payload.id)
            if(todo) {
                todo.text = action.payload.text
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer

// slice: A slice in Redux means one specific part of your application's global state + the logic that manages it.

// createSlice(): creates the slice 

// nanoId: generates unique id

// reducers: functions that modify the state

// actions: automatically generated from reducers