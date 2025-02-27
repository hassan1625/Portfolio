 

export default function TechStack() {
    return(
        <div className='tech-stack background-black'>
            <div className='tech-stack-wrapper'>
                <div className='tech-stack-content color-white text-start'>
                    <h5>SKILLS</h5>
                    <h2>Technologies</h2>
                </div>
                <div className='tech-skill-wrapper color-white'>
                    <p className="fw-7">The Skills and Technologies I used...</p>
                    <div className='tech-skill-container flex align-center justify-center gap-2' data-aos="fade-up">
                        <div className='tech-skill skill-1'><img src="./src/assets/html5-tech.png" alt="Html5" /></div>
                        <div className='tech-skill skill-2'><img src="./src/assets/css3-tech.png" alt="Css3" /></div>
                        <div className='tech-skill skill-3'><img src="./src/assets/js-tech.png" alt="Js" /></div>
                        <div className='tech-skill skill-4'><img src="./src/assets/shopify-tech.png" alt="Shopify" /></div>
                        <div className='tech-skill skill-5'><img src="./src/assets/vue-tech.png" alt="Vue" /></div>
                        <div className='tech-skill skill-6'><img src="./src/assets/git-hub.svg" alt="Github" /></div>
                        <div className='tech-skill skill-7'><img src="./src/assets/react-tech.png" alt="React" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}