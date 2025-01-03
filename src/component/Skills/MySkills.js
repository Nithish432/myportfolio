import React from 'react';
import "./myskills.css";
import Images from "./skillimg";

function MySkills() {

  return (
    <div className='total-skills' id='Skills'>
        <div className='title-skills' data-aos="fade-down" data-aos-duration="3000"><p>Skills and Tools</p></div>
        <div className='skills-section'>
            <img className='skill-logos' data-aos="flip-left" data-aos-duration="2000" src={Images.html} alt="html-logo"/>
            <img className='skill-logos' data-aos="flip-left" data-aos-duration="2000" src={Images.css} alt="css-logo"/>
            <img className='skill-logos' data-aos="flip-left" data-aos-duration="2000" src={Images.javascript} alt="javascript-logo"/>
            <img className='skill-logos' data-aos="flip-left" data-aos-duration="2000" src={Images.reactjs} alt="reactjs-logo"/>
            {/* <img className='skill-logos' data-aos="flip-left" data-aos-duration="2000" src={Images.nodejs} alt="nodejs-logo"/>
            <img className='skill-logos' data-aos="flip-left" data-aos-duration="2000" src={Images.mongo} alt="mongo-logo"/> */}
            {/* <img className='skill-logos' data-aos="flip-left" data-aos-duration="2000" src={Images.redux} alt="redux-logo"/> */}
        </div>
    </div>
  )
}

export default MySkills