import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/countersSlice'

export const store = configureStore({
    reducer : {
        counter : counterReducer 
    }
})
