import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editBlog } from "../store/BlogSlice";

const EditBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const blogs = useSelector((state) => state.blog.blogs);
    const blogToEdit = blogs.find((blog) => blog.id === Number(id));

    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        content: ""
    });

    useEffect(() => {
        if (blogToEdit) {
            setFormData(blogToEdit);
        }
    }, [blogToEdit]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editBlog({ id: parseInt(id), updatedBlog: formData }));
        navigate("/");  // Redirect to blog list
    };

    if (!blogToEdit) return <h2>Blog not found!</h2>;

    return (
        <div className="edit-blog-container">
            <h2>Edit Blog</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Blog Title"
                    required
                />
                <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="Blog Summary"
                    required
                />
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Blog Content"
                    required
                />
                <button type="submit">Update Blog</button>
            </form>
        </div>
    );
};

export default EditBlog;
