import React from "react";
import heroImagedesktop from "../assets/images/image-home-hero-large.webp";
import heroImageMobile from "../assets/images/image-home-hero-small.webp";
import Navigation from "../components/Navigation";
import iconwholefood from  "../assets/images/icon-whole-food-recipes.svg";
import iconminimumfuss from "../assets/images/icon-minimum-fuss.svg";
import iconsearch from "../assets/images/icon-search-in-seconds.svg";
import introserviceimage from "../assets/images/image-home-real-life-small.webp";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";

export default function Home() {
  return (
<>
    <Navigation/>
    <section className="hero">
          
          <h1 className="title__hero">Healthy meals, zero fuss</h1>
          <p className="hero__text">
            Discover eight quick, whole-food recipes that you can cook 
            tonight—no processed junk, no guesswork.
          </p>
          <button className="btn">Start exploring</button>
          <picture>
            <source media="(max-width: 768px)" srcSet={heroImageMobile} />
            <source media="(min-width: 769px)" srcSet={heroImagedesktop} />
            <img src={heroImageMobile} loading="lazy" alt="Hero" className="hero__image" />
          </picture>
    </section>

    <section className="service ">
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

<section className="intro__services">
      <h2 className="intro__subtitle">Built for real life</h2>
      <p className="intro__description">
        Cooking shouldn't be complicated. These recipes come in under 
        <strong> 30 minutes</strong> of active time, fit busy schedules, and taste good 
        enough to repeat. 
       
 </p>
 <p className="intro__description">
        Whether you're new to the kitchen or just need fresh ideas, 
        we've got you covered.
      </p>

  <img src={introserviceimage} alt="Intro service" loading ="lazy"className="intro__services__image" />
</section>

<section className="recipes__section">
 <CalltoAction/>
</section>
 <Footer/>
      
      
   

    </>
  );
}

  