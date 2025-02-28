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
                        <option value="technology">Technology</option>
                        <option value="health-wellness">Health & Wellness</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="science">Science</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="business-startups">Business & Startups</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="sports">Sports</option>
                        <option value="environment">Environment</option>
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