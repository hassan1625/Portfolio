 

export default function OverView() {
    return (
        <div className="overview-container background-white" id="AboutOverview">
            <div className="overview-wrapper">
                <div className="overview-content color-black" data-aos="fade-right">
                    <h4>Introduction</h4>
                    <h2>Overview.</h2>
                    <p className="fw-7">"I'm a Shopify Developer specializing in custom theme development and Vue.js web applications. With 2+ years of experience, I’ve built scalable, high-performance applications, including 10+ successful enterprise projects. Skilled in Liquid, Javascript, Vue.js, React, I bring a strong FinTech background to the table. Let’s connect to discuss how I can add value to your project!</p>
                </div>
                <div className="overview-skill-wrapper flex align-center space-between" data-aos="fade-right" data-aos-offset="100">
                    {/* skill 1 */}
                    <div className="skill skill-1 flex align-center justify-center">
                        <div className="skill-box color-white">
                            <div className="skill-icon">
                                <img src="/assets/shopify-icon.png" alt="Shopify Developer" />
                            </div>
                            <div className="skill-name">
                                Shopify Theme Developer
                            </div>
                        </div>
                    </div>
                    {/* skill 2 */}
                    <div className="skill skill-2 flex align-center justify-center">
                        <div className="skill-box color-white">
                            <div className="skill-icon">
                                <img src="/assets/front-end.png" alt="Front End Developer" />
                            </div>
                            <div className="skill-name">
                                Front End Developer
                            </div>
                        </div>
                    </div>
                    {/* skill 3 */}
                    <div className="skill skill-3 flex align-center justify-center">
                        <div className="skill-box color-white">
                            <div className="skill-icon">
                                <img src="/assets/js-developer.png" alt="Js Developer" />
                            </div>
                            <div className="skill-name">
                                JS Developer
                            </div>
                        </div>
                    </div>
                    {/* skill 4 */}
                    <div className="skill skill-4 flex align-center justify-center">
                        <div className="skill-box color-white">
                            <div className="skill-icon">
                                <img src="/assets/web-app-icon.png" alt="Web App Developer" />
                            </div>
                            <div className="skill-name">
                                Web App Developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}