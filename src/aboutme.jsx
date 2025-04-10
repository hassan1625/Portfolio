function AboutMe() {
  return (
    <div className="about-me-ccontainer" id="About">
      <div className="about-me-head color-orange text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2>About Me</h2>
        <p>Transforming Ideas into Digital Experiences</p>
      </div>
      <div className="about-me-content flex align-center space-between">
        <div className="about-me-intro color-orange">
          <h4>Hello, I'm</h4>
          <h2>Hassan</h2>
          <p>
            Expert Front-End & Shopify Developer | 2+ Years of Experience in
            Crafting Scalable, High-Performance Websites. Proven Track Record of
            Delivering 10+ Successful Enterprise Projects. Proficient in Liquid,
            JavaScript, Vue.js, and React. Let's Collaborate to Elevate Your
            Project's Online Presence!"
          </p>
        </div>
        <div className="about-me-img" data-aos="zoom-out-left">
          <img src="./assets/transparent3.png" alt="Muhammad Hassan Latif" />
        </div>
      </div>
      <div
        className="overview-skill-wrapper flex align-center space-between"
        data-aos="fade-right"
        data-aos-offset="100"
      >
        {/* skill 1 */}
        <div className="skill skill-2 flex align-center justify-center">
          <div className="skill-box color-orange">
            <div className="skill-icon">
              <img src="/assets/front-end.png" alt="Front End Developer" />
            </div>
            <div className="skill-name">Front End Developer</div>
          </div>
        </div>
        {/* skill 2 */}
        <div className="skill skill-1 flex align-center justify-center">
          <div className="skill-box color-orange">
            <div className="skill-icon">
              <img src="/assets/shopify-icon.png" alt="Shopify Developer" />
            </div>
            <div className="skill-name">Shopify Theme Developer</div>
          </div>
        </div>
        {/* skill 3 */}
        <div className="skill skill-3 flex align-center justify-center">
          <div className="skill-box color-orange">
            <div className="skill-icon">
              <img src="/assets/js-developer.png" alt="Js Developer" />
            </div>
            <div className="skill-name">JS Developer</div>
          </div>
        </div>
        {/* skill 4 */}
        <div className="skill skill-4 flex align-center justify-center">
          <div className="skill-box color-orange">
            <div className="skill-icon">
              <img src="/assets/web-app-icon.png" alt="Web App Developer" />
            </div>
            <div className="skill-name">Web App Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
