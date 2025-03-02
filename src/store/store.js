import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from './BlogSlice'

export const store = configureStore({
    reducer:{
        blog:BlogReducer
    }
})