function Edit() {
    return (
        <div>
            <h1>Edit Blog</h1>
            <label htmlFor="title">Title </label><br />
                    <input onChange={(e) => { setEditTitle(e.target.value) }} type="text" id="title" className="title" required /><br />
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
        </div>
    );
}

export default Edit;