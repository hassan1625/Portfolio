export default function TechStack() {
  return (
    <div className="tech-stack background-black">
      <div className="tech-stack-wrapper">
        <div
          className="tech-stack-content color-orange text-center"
          data-aos="fade-down"
        >
          <h5>SKILLS</h5>
          <h2>Technologies</h2>
        </div>
        <div className="tech-skill-wrapper color-orange">
          <p className="fw-7">The Skills and Technologies I used...</p>
          <div
            className="tech-skill-container flex align-center justify-center gap-2"
            data-aos="fade-up"
          >
            <div className="tech-skill skill-1">
              <img src="/assets/html5-tech.png" alt="Html5" />
            </div>
            <div className="tech-skill skill-2">
              <img src="/assets/css3-tech.png" alt="Css3" />
            </div>
            <div className="tech-skill skill-3">
              <img src="/assets/js-tech.png" alt="Js" />
            </div>
            <div className="tech-skill skill-4">
              <img src="/assets/shopify-tech.png" alt="Shopify" />
            </div>
            <div className="tech-skill skill-5">
              <img src="/assets/vue-tech.png" alt="Vue" />
            </div>
            <div className="tech-skill skill-6">
              <img src="/assets/git-hub.svg" alt="Github" />
            </div>
            <div className="tech-skill skill-7">
              <img src="/assets/react-tech.png" alt="React" />
            </div>
          </div>
        </div>
        <div className="shopify-skill-wrapper color-orange">
          <div className="text-start shopify-skill-content">
            <p>What I excel at when it comes to </p>
            <h2 className="text-start shopify-skill-title">
              Shopify Theme Development.
            </h2>
          </div>
            <div className="shopify-skill-list flex align-center space-between">
              <div className="width-100 shopify-skill flex align-center space-between text-start">
                <div className="width-50 skill-details" data-aos="fade-down-right">
                  <h3>Custom Development</h3>
                </div>
                <div className="width-50 skill-details" data-aos="fade-down-left">
                  <p>
                    "Tailored solutions to meet unique business requirements and
                    extend Shopify functionality."
                  </p>
                </div>
              </div>
              <div className="width-100 shopify-skill flex align-center space-between text-start">
                <div className="width-50 skill-details" data-aos="fade-right">
                  <h3>Theme Customization</h3>
                </div>
                <div className="width-50  skill-details" data-aos="fade-left">
                  <p>
                    "Modifying existing themes to align with your brand's
                    identity and user experience goals."
                  </p>
                </div>
              </div>
              <div className="width-100 shopify-skill flex align-center space-between text-start">
                <div className="width-50 skill-details" data-aos="fade-up-right">
                  <h3>Theme Deployment</h3>
                </div>
                <div className="width-50 skill-details" data-aos="fade-up-left">
                  <p>
                    "Seamless setup and publishing of custom or prebuilt themes
                    to your Shopify store."
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
