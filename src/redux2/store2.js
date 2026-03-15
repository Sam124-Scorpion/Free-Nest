import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features2/searchSlice'
import collectionReducer from './features2/collectionSlice'

export const store2 = configureStore({

    reducer : {
            search : searchReducer ,
            collection : collectionReducer
    }

})