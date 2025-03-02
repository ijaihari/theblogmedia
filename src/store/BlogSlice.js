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
            const { id, updatedBlog } = action.payload;
            const index = state.blogs.findIndex(blog => blog.id === id);
            if (index !== -1) {
                state.blogs[index] = { ...state.blogs[index], ...updatedBlog };
            }
        }
    }
});

export const { addBlog, editBlog } = BlogReducer.actions;

export default BlogReducer.reducer