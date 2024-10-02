import React from "react";
import "./about.css";
import me from "../../assets/Nithish's image.png";

export const About = () => {

  return (
    <>
      <div className="home-contents about" id="About">
        <div className="about-container">
          <h2 className="my-name" data-aos="fade-right" data-aos-duration="3000">Nithish Kumar K</h2>
          <p className="designation" data-aos="fade-right" data-aos-duration="3000">
            <span>|</span> Web <span className="deve-color">Developer</span>
          </p>
          <p className="quotes"data-aos="fade-right" data-aos-duration="3000">
            “I thrive in diverse environments, continuously learning and adapting
            to new challenges with a growth mindset."
          </p>
          <div className="media-links" data-aos="fade-up" data-aos-duration="3000">
            <a href="#Contact" className="contacts">Contact Me</a>
            <a href="https://drive.google.com/file/d/1ZpPzZStfx3HqEFr4ZJmfWptEkcoIiMaJ/view?usp=sharing" target="_blank" rel="noreferrer" className="resume">Resume</a>
          </div>
        </div>
        <div className="imgdiv">
          <img className="my-pic" src={me} alt="Nithish's img" />
        </div>
      </div>
    </>
  );
};
