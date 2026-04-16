import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> learning
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science</h4>
                <h5>Abasyn University</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Specializing in Web and App Development. Building a strong
              foundation in software engineering, algorithms, and modern frontend
              frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development</h4>
                <h5>Self-Taught & Projects</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Mastering React, React Native, and Three.js. Developed several
              interactive projects focusing on 3D animations, mobile-first
              design, and user-centric interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
