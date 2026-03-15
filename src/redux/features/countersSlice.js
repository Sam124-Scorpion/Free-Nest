import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'counter',

    initialState: {
        value: 0
    },

    reducers : {
            increment : val =>{
                val.value +=1
            },
            decrement : val =>{
                val.value -=1
            },
            incrementByAmmount : (val , action)=>{
                val.value += action.payload
            }
            ,
            defaultval : val=>{
                val.value = 0
            }
    }
})

export const {increment , decrement , incrementByAmmount , defaultval} = slice.actions

export default slice.reducer
