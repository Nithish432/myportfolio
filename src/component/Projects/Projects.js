import React from "react";
import "./projects.css";
import image from "../../assets/app.png";

function Projects() {
  return (
    <div className="total-projects" id="Projects">
      <p className="title-projects" data-aos="fade-down" data-aos-duration="3000">
        Projects
      </p>
      <div className="projects-section">
        <div className="cards" data-aos="fade-up" data-aos-duration="3000">
          <img
            className="card-img"
            src={image}
            alt="Movies & Trailers website"
          />
          <div className="card-body-content">
            <p className="card-text">
              An interactive platform to explore the <b>Movies and Trailers </b>
              with seamless <b>CRUD</b> functionality, built using{" "}
              <b>React.js</b>.
            </p>
            <p className="git-frontandback-link">
              <a
                className="git-front"
                href="https://github.com/Nithish432/movies-trailers-website"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
              {/* <a
                    className="git-back"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >node</a> */}
            </p>
            <p className="live">
              <a
                className="liveApp"
                href="https://movies-trailers-website.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
