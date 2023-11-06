import { createSlice } from "@reduxjs/toolkit"

const countSate = 0

export const countSlice = createSlice({
    name: 'count',
    initialState: countSate,
    reducers: {
        count: (state) => state,
        setCount: (state, action) => {
            return state = state + action.payload
        },
        countDecrement: (state, action) => {
            return state = state - action.payload
        }
    }
})


export const { count, setCount, countDecrement } = countSlice.actions
export default countSlice.reducer