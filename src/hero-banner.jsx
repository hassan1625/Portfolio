 

export default function HeroBanner() {
    return(
        <div className="hero-banner-container">
            <div className="hero-banner-warpper pos-relative">
                <div className="hero-banner-img pos-relative">
                    <img className="image" src="./src/assets/world-map.jpeg" alt="Hero Banner" />
                    <div className="hero-banner-overlay overlay"></div>
                </div>
                <div className="hero-banner-content color-white" data-aos="zoom-in-right">
                    <h3>Hi I am</h3>
                    <h2>Muhammad Hassan Latif</h2>
                    <p>Software Engineer | Shopify Developer | Js Developer</p>
                </div>
                <div className="portfolio-img" data-aos="zoom-in">
                    <img src="./src/assets/transparent3.png" alt="Muhammad Hassan Latif" />
                </div>
            </div>
        </div>
    )
}