import { configureStore } from "@reduxjs/toolkit";
import countReduce from "./features/counter/CounterSlice";



const store = configureStore({
    reducer: {
        countReducer: countReduce
    }
})


export default store