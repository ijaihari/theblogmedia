import { createSlice } from "@reduxjs/toolkit";
import { blogs } from "../data/blog";
const initialState = {
    blogs,
}

const BlogReducer = createSlice({
    name: 'blog',
    initialState,

    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
            return state
        },
        editBlog: (state, action) => {
             
        }


    }
});

export const { addBlog } = BlogReducer.actions;

export default BlogReducer.reducer