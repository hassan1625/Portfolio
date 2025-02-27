export default function Experience() {
    return (
        <div className="experience-container background-black">
            <div className="experience-wrapper">
                <div className="experience-content color-white text-start" data-aos="fade-down">
                    <h4>What I've done so far</h4>
                    <h2>Experience</h2>
                </div>
                <div className="experience-journey">
                    <div className="experience-journey-wrapper">
                        {/* Journey 1 */}
                        <div className="journey-content journey-1 pos-relative flex align-center flex-start" data-aos="fade-right" >
                            <span className="journey-line" data-aos="fade-up" ></span>
                            <div className="journey-data color-white text-start">
                                <h2 className="journey-designation">Software Engineer</h2>
                                <span>Jan 2025 - Present | Devsinc</span>
                            </div>
                        </div>
                        {/* Journey 2 */}
                        <div className="journey-content journey-2 pos-relative flex align-center flex-end" data-aos="fade-up" >
                            <span className="journey-line" data-aos="fade-up" ></span>
                            <div className="journey-data color-white text-end">
                                <h2 className="journey-designation">Shopify Developer</h2>
                                <span>Feb 2023 - Dec 2024 | Alchemative</span>
                            </div>
                        </div>
                        {/* Journey 3 */}
                        <div className="journey-content journey-3 pos-relative flex align-center flex-start"data-aos="fade-right" >
                            {/* <span className="journey-line"></span> */}
                            <div className="journey-data color-white text-start">
                                <h2 className="journey-designation">Front End Developer</h2>
                                <span>Sep 2022 - Feb 2023 | Swotech(PVT)Limited</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}