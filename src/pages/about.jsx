
import React from "react";


import CalltoAction from "../components/CalltoAction";
import imageAbout from "../assets/images/image-about-our-mission-small.webp";
import imageAboutDesktop from "../assets/images/image-about-our-mission-large.webp";
import imagebeyonplate from  "../assets/images/image-about-beyond-the-plate-small.webp";
import imagebeyonplateDesktop from  "../assets/images/image-about-beyond-the-plate-large.webp";

import InfoItemAbout from "../components/InfoItemAbout";
import dataInfoAbout from "../data/Aboutdatainfo.js";

export default function About() {



  return (
    <>
  
    <section className="about ">
      <div className="hero__about">
          <div className="wrapper_text">
            <span className="small__title">Our mission</span>
            <h1 className="about__title">Help more people coook nourishing meals, more often.</h1>
            <p className="about__text">
              Help more people cook nourishing meals, more often.
              Healthy Recipe Finder was created to prove that healthy 
              eating can be convenient, affordable, and genuinely delicious. </p>

              <p className="about__text">
              We showcase quick, whole-food dishes that anyone can master—no 
              fancy equipment, no ultra-processed shortcuts—just honest 
              ingredients and straightforward steps.
            </p>
          </div>
          <div className="wrapper__image">
            <picture>
              <source media="(max-width: 768px)" srcSet={imageAbout} />
              <source media="(min-width: 769px)" srcSet={imageAboutDesktop} />
              <img src={imageAbout} alt="About" loading="lazy" className="about__image" />
            </picture>
          </div>
      </div>
      </section>

      <section className="about__section--info">
 
          <h2 className="about__subtitle">Why we exist</h2>
          <ul className="about__text">

            {dataInfoAbout.slice(0,3).map((item) => (
              <InfoItemAbout
              key={item.id}
              arrow={item.arrow}
              title={item.title}
              description={item.description}
            />
            ))}
                                     
          </ul>
 </section>


      <section className="about__section--info ">
          <h2 className="about__subtitle">Our philosophy</h2>
          <ul className="about__text">
            {dataInfoAbout.slice(3).map((item) => (
              <InfoItemAbout
              key={item.id}
              arrow={item.arrow}
              title={item.title}
              description={item.description}
            />
            ))}
      </ul>
</section>

 <section className="about__section--beyond ">
        <div className="beyond__text">
              <h2 className="about__beyond--subtitle">Beyond the plate</h2>
              <p className="about__beyond--text">
                We believe food is a catalyst for community and well-being
                By sharing approachable recipes, we hope to:
              </p>

              <ul className="about__beyond--list">
                <li className="about__list__item">Encourage family dinners and social cooking.</li>
                <li className="about__list__item">Reduce reliance on single-use packaging and delivery waste.</li>
                <li className="about__list__item">Spark curiosity about seasonal produce and local agriculture.</li>
              </ul>
          </div>
          <picture className="image__beyond">
       
                <source media="(max-width: 768px)" srcSet={imagebeyonplate} />
                <source media="(min-width: 769px)" srcSet={imagebeyonplateDesktop} />
                <img src={imagebeyonplate} alt="Beyond the plate" loading="lazy" className="about__image--beyond" />
              </picture>
        
      </section>
   
    <section className="recipes__section">
     <CalltoAction/>
    </section>
  
  
    </>
    
  )
}
  

  


  

