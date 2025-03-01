import { useNavigate } from "react-router-dom";
function Intro() {
    const navigate = useNavigate()
    return (

        <div className="introsection">
            <section className="intro">
                <h2 className="intro-idea">Uncover the fresh perspectives, ideas, and <br /> knowledge through the power of blogs.</h2>
                <p className="intro-about">TheBlog Media is an open platform where readers find dynamic thinking, and where expert and undiscovered <br /> voices can share their writing on any topics. </p>
                <button className="blog-read" onClick={() => navigate('/blogs')}>Start Reading <i class="fa-solid fa-circle-arrow-right"></i></button>{/* 
            <button className="scroll-down">Scroll down <i class="fa-solid fa-arrow-down"></i></button> */}
            </section>

            <section className="intro-samples">
                <section className="trend-blog">
                    <h1 className="trend-t title">Trending Blog</h1>
                    <section className="trends">
                        <section className="trend-block">
                           <p className="trendtag">tag</p>
                           <button className="openext"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                           <h2 className="trend-title">Sustainable Living: How Small Changes Make a Big Impact</h2>
                        </section>
                        <section className="trend-block">

                        </section>
                        <section className="trend-block">

                        </section>
                        <section className="trend-block">

                        </section>
                    </section>
                </section>
                <section className="recent-blog">
                    <h1 className="recent-t title">Recent Blogs</h1>
                    <section className="recent-block">
                        <h3>Title</h3>
                        <p>Category </p>
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