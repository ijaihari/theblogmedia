import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../store/BlogSlice";

function Write() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        const newBlog = {
            id: Math.floor(Math.random() * 1000),
            date: Date.now(),
            title: title,
            summary: summary,
            content: content
        }
        dispatch(addBlog(newBlog))


    }
    return (
        <div>
            <h1>Write</h1>
            <section className="write">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title </label>
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" id="title" className="title" required /><br />
                    <label className="label" htmlFor="summary" >Summary</label>
                    <input onChange={(e) => { setSummary(e.target.value) }} type="text" id="summary" className="summary" required /><br />
                    <label className="label" htmlFor="content">Content</label><br />
                    <textarea onChange={(e) => { setContent(e.target.value) }} name="content" id="content" required></textarea><br />
                    <button type="submit">Submit Blog</button>
                </form>
            </section>
        </div>
    );
}

export default Write;