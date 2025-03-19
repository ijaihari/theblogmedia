import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editBlog } from "../store/BlogSlice";

const Edit = () => {
    const { blogId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const blogs = useSelector((state) => state.blog.blogs);
    const blogToEdit = blogs.find((blog) => blog.id === Number(blogId));

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
        dispatch(editBlog({ id: parseInt(blogId), updatedBlog: formData }));
        navigate(`/blogs/${blogId}`);  // Redirect to blog list
    };

    if (!blogToEdit) return <h2>Blog not found!</h2>;

    return (
        <div className="edit-blog-container">
            <h1>Edit blog</h1>
            <section className="edit-container">
                <form className="edit-form" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title </label><br />
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Blog Title"
                        required
                    /> <br />
                    <label htmlFor="summary">Summary</label><br />

                    <input
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        placeholder="Blog Summary"
                        required
                    /> <br /> <label htmlFor="summary">Content</label><br />
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Blog Content"
                        required
                    /> <br />
                    <button type="submit">Update Blog</button>
                </form>
            </section>
        </div>
    );
};

export default Edit;
