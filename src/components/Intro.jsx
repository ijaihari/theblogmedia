import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blog";

function Intro() {
    const navigate = useNavigate()
    const getTrendingAndRecentBlogs = (blogs) => {
        // Sort blogs by date in descending order (most recent first)
        const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log(sortedBlogs);
        // Get 5 most recent blogs
        const recentBlogs = sortedBlogs.slice(0, 3);

        // Shuffle and get 4 random trending blogs
        const trendingBlogs = [...blogs]
            .sort(() => 0.5 - Math.random()) // Shuffle array randomly
            .slice(0, 4); // Pick first 4 after shuffle

        return { trendingBlogs, recentBlogs };
    };

    // Usage
    const { trendingBlogs, recentBlogs } = getTrendingAndRecentBlogs(blogs);
    /* console.log("Trending Blogs:", trendingBlogs);
    console.log("Recent Blogs:", recentBlogs); */

    return (

        <div className="introsection">
            <section className="intro">
                <h2 className="intro-idea">Uncover the fresh perspectives, ideas, and <br /> knowledge through the power of blogs.</h2>
                <p className="intro-about">TheBlog Media is an open platform where readers find dynamic thinking, and where expert and undiscovered <br /> voices can share their writing on any topics. </p>
                <button className="blog-read" onClick={() => navigate('/blogs')}>Start Reading <i class="fa-solid fa-arrow-right"></i></button>{/* 
            <button className="scroll-down">Scroll down <i class="fa-solid fa-arrow-down"></i></button> */}
            </section>

            <section className="intro-samples">
                <section className="trend-blog">
                    <h1 className="trend-t title">Trending Blog</h1>
                    <section className="trends">
                        {
                            trendingBlogs.map((tblog, index) =>
                                <section className="trend-block" key={index}>
                                    <p className="trendtag">{tblog.tag}</p>
                                    <button onClick={() => navigate(`/blogs/${tblog.id}`)} className="openext"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                                    <h2 className="trend-title">{tblog.title}</h2>
                                </section>)
                        }
                        {/* <section className="trend-block">
                           <p className="trendtag"></p>
                           <button className="openext"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                           <h2 className="trend-title">Sustainable Living: How Small Changes Make a Big Impact</h2>
                        </section> */}
                    </section>
                </section>
                <section className="recent-blog">
                    <section className="re-blog">
                        <h1 className="recent-t title">Recent Blogs</h1> <hr />
                        {
                            recentBlogs.map((rblog, index) => <section key={index} className="recent-block">
                                <button onClick={()=> navigate(`/blogs/${rblog.id}`)}>{rblog.title}</button>
                                <p># {rblog.tag}</p>
                            </section>)
                        }
                    </section>
                    <section className="sub-news">
                        <h2>Subscribe to Newsletter</h2>
                        <input type="text" name="subscribe" id="subscribe" placeholder="example@email.com" /><br />
                        <button>Subscribe</button>
                    </section>
                </section>

            </section>
        </div>
    );
}

export default Intro;