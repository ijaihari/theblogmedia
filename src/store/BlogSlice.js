import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const BlogReducer = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            console.log(action.payload);
            state.push(action.payload)
            return state
            
        }
    }
});

export const { addBlog } = BlogReducer.actions;

export default BlogReducer.reducer