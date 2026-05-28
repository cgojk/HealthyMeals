import React from "react";
import heroImagedesktop from "../assets/images/image-home-hero-large.webp";
import heroImageMobile from "../assets/images/image-home-hero-small.webp";
import Navigation from "../components/Navigation";
import iconwholefood from  "../assets/images/icon-whole-food-recipes.svg";
import iconminimumfuss from "../assets/images/icon-minimum-fuss.svg";
import iconsearch from "../assets/images/icon-search-in-seconds.svg";
import introserviceimage from "../assets/images/image-home-real-life-small.webp";
import iconinstagram from "../assets/images/icon-instagram.svg";
import iconticktock from "../assets/images/icon-tiktok.svg";
import iconbluesky from "../assets/images/icon-bluesky.svg";


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
          <img  src={heroImageMobile} loading="lazy" alt="Hero" className="hero__image" />
    </section>

    <section className="service container">
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

<section className="call-to-action container">
 <h2 className="call-to-action__title"> Ready to cook smarter? </h2>
      <p className="call-to-action__description">
        Hit the button, pick a recipe, and get dinner on the table—fast.
      </p>

    
      <button className="btn">Browse recipes</button>
  </section>

  <section className="footer">
    <ul className="footer__links">
      <li className="footer__item">
        <a href="#" className="footer__link">
          <img src={iconinstagram} alt="Instagram" />
        </a>
      </li>
      <li className="footer__item">
        <a href="#" className="footer__link">
          <img src={iconticktock} alt="TikTok" />
        </a>
      </li>
      <li className="footer__item">
        <a href="#" className="footer__link">
          <img src={iconbluesky} alt="Blue Sky" />
        </a>
      </li>
      
    </ul>
    <p className="footer__text">Made with ❤️ and 🥑</p>
  </section>
      
      
   

    </>
  );
}
{/* 
  Healthy meals, zero fuss

  Discover eight quick, whole-food recipes that you can cook 
  tonight—no processed junk, no guesswork.

  Start exploring

  What you'll get

  Whole-food recipes
  Each dish uses everyday, unprocessed ingredients.

  Minimum fuss
  All recipes are designed to make eating healthy quick and easy.

  Search in seconds
  Filter by name or ingredient and jump straight to the recipe you need.

  Built for real life

  Cooking shouldn't be complicated. These recipes come in under 
  30 minutes of active time, fit busy schedules, and taste good 
  enough to repeat. 

  Whether you're new to the kitchen or just need fresh ideas, 
  we've got you covered.

  Ready to cook smarter?

  Hit the button, pick a recipe, and get dinner on the table—fast.

  Browse recipes

  Made with ❤️ and 🥑

</body>
</html> */}