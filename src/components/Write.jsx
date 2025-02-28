import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../store/BlogSlice";

function Write() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");


    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        const today = new Date();
        const formattedDate = today.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        const newBlog = {
            id: Math.floor(Math.random() * 1000000),
            date: formattedDate,
            title: title,
            summary: summary,
            content: content,
            tag: category,
        }
        dispatch(addBlog(newBlog));
    }
    return (
        <div>
            <h1>Write</h1>
            <section className="write">
                <form className="form" onSubmit={handleSubmit}>

                    <label htmlFor="title">Title </label><br />
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" id="title" className="title" required /><br />
                    <label className="label" htmlFor="summary" >Summary</label><br />
                    <input onChange={(e) => { setSummary(e.target.value) }} type="text" id="summary" className="summary" required /><br />
                    <label for="dropdown">Category </label>
                    <select id="dropdown" name="options" onChange={(e) => { setCategory(e.target.value) }}>
                        <option value="Technology">Technology</option>
                        <option value="Health & Wellness">Health & Wellness</option>
                        <option value="Finance">Finance</option>
                        <option value="Education">Education</option>
                        <option value="Science">Science</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Business-startups">Business & Startups</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sports">Sports</option>
                        <option value="Environment">Environment</option>
                    </select> <br />
                    <label className="label" htmlFor="content">Content</label><br />
                    <textarea onChange={(e) => { setContent(e.target.value) }} name="content" id="content" required></textarea><br />
                    <button type="submit">Submit Blog</button>
                </form>
            </section>

        </div>
    );
}

export default Write;