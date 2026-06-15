import React from "react";
import heroImagedesktop from "../assets/images/image-home-hero-large.webp";
import heroImageMobile from "../assets/images/image-home-hero-small.webp";

import iconwholefood from  "../assets/images/icon-whole-food-recipes.svg";
import iconminimumfuss from "../assets/images/icon-minimum-fuss.svg";
import iconsearch from "../assets/images/icon-search-in-seconds.svg";
import introserviceimage from "../assets/images/image-home-real-life-small.webp";
import introserviceimagedesktop from "../assets/images/image-home-real-life-large.webp";
import imagebehindhero from "../assets/images/pattern-squiggle-1.svg";
import { Link } from "react-router-dom";

import CalltoAction from "../components/CalltoAction";

export default function Home() {
  return (
<>

    <section className="hero ">

       <img
    src={imagebehindhero}
    alt=""
    className="hero__background-pattern"
  />
          
          <h1 className="title__hero "><span className="highlight">Healthy</span> meals, zero fuss</h1>
          <p className="hero__text">
            Discover eight quick, whole-food recipes that you can cook 
            tonight—no processed junk, no guesswork.
          </p>
          <Link to="/recipes">
            <button className="button-recipes">Start exploring</button>
          </Link>
         
        
          
              <picture className="hero__picture container" aria-label="Hero image showing a healthy meal">
              <source media="(min-width:700px)"
                srcSet={heroImagedesktop} />
                 <img src={heroImageMobile} loading="lazy" alt="Hero" className="hero__image" /> 
                
              </picture>
             
          
    </section>

    <section className="service container ">
      <h2 className="service__title">What you'll get</h2>
      <ul className="service__list">
        <li className="service__item">
          <div className="service__item__icon">
          <img className="icon__service"src={iconwholefood} alt="Whole-food recipes" />
          </div>
          <h3 className="service__subtitle">Whole-food recipes</h3>
         <p className="service__description">
            Each dish uses everyday, unprocessed ingredients.</p>
        </li>
        <li className="service__item">
          <div className="service__item__icon">
            <img className="icon__service" src={iconminimumfuss} alt="Minimum fuss" />
          </div>
          <h3 className="service__subtitle">Minimum fuss</h3>
          <p className="service__description">
            All recipes are designed to make eating healthy quick and easy.
          </p>
        </li>
        <li className="service__item">
          <div className="service__item__icon">
            <img className="icon__service" src={iconsearch} alt="Search in seconds" />
          </div>
          <h3 className="service__subtitle">Search in seconds</h3>
          <p className="service__description">
            Filter by name or ingredient and jump straight to the recipe you need.
          </p>
        </li>
      </ul>
</section>

<section className="intro__services container">
  <div className="description__intro--services">
      <h2 className="intro__subtitle">Built for real life</h2>
      <p className="intro__description">
        Cooking shouldn't be complicated. These recipes come in under  <span  className="minutes">  30 minutes </span>  of active time, fit busy schedules, and taste good 
        enough to repeat. 
       
 </p>
 <p className="intro__description ">
        Whether you're new to the kitchen or just need fresh ideas, 
        we've got you covered.
      </p>
</div>

  <picture className="intro__services__image" aria-label="Intro service image">
    <source media="(min-width: 768px)" srcSet={introserviceimagedesktop} />
    <img src={introserviceimage} alt="Intro service" loading="lazy" />
  </picture>
</section>

<section className="recipes__section ">
 <CalltoAction/>
</section>

      
      
   

    </>
  );
}

  