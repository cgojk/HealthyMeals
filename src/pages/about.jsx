
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";

export default function About() {
  return (
    <>
    <Navigation/>
    <section className="about container">
      <h1 className="about__title">Our mission</h1>
      <p className="about__text">
        Help more people cook nourishing meals, more often.
        Healthy Recipe Finder was created to prove that healthy 
        eating can be convenient, affordable, and genuinely delicious. 
        We showcase quick, whole-food dishes that anyone can master—no 
        fancy equipment, no ultra-processed shortcuts—just honest 
        ingredients and straightforward steps.
      </p>

      <h2 className="about__subtitle">Why we exist</h2>
      <p className="about__text">
        Cut through the noise. 
        The internet is bursting with recipes, yet most busy cooks 
        still default to take-away or packaged foods. We curate a 
        tight collection of fool-proof dishes so you can skip the 
        scrolling and start cooking.
      </p>

      <p className="about__text">
        Empower home kitchens. 
        When you control what goes into your meals, you control how 
        you feel. Every recipe is built around unrefined ingredients 
        and ready in about half an hour of active prep.
      </p>

      <p className="about__text">
        Make healthy look good. 
        High-resolution imagery shows you exactly what success looks 
        like—because we eat with our eyes first, and confidence matters.
      </p>

      <h2 className="about__subtitle">Our food philosophy</h2>
      <p className="about__text">
        Whole ingredients first. 
        Fresh produce, grains, legumes, herbs, and quality fats form the 
        backbone of every recipe.
      </p>

      <p className="about__text">
        Flavor without compromise. 
        Spices, citrus, and natural sweetness replace excess salt, sugar, 
        and additives.
      </p>

      <p className="about__text">
        Respect for time. 
        Weeknight meals should slot into real schedules; weekend cooking 
        can be leisurely but never wasteful.
      </p>
      
      <p className="about__text">
        Sustainable choices. 
        Short ingredient lists cut down on food waste and carbon footprint, 
        while plant-forward dishes keep things planet-friendly.
      </p>

      <h2 className="about__subtitle">Beyond the plate</h2>
      <p className="about__text">
        We believe food is a catalyst for community and well-being. 
        By sharing approachable recipes, we hope to:
      </p>

      <ul className="about__list">
        <li className="about__list__item">Encourage family dinners and social cooking.</li>
        <li className="about__list__item">Reduce reliance on single-use packaging and delivery waste.</li>
        <li className="about__list__item">Spark curiosity about seasonal produce and local agriculture.</li>
      </ul>

    </section>
    <section className="recipes__section">
     <CalltoAction/>
    </section>
    <Footer/>
    </>
  )

  


  /* Our mission

  Help more people cook nourishing meals, more often.

  Healthy Recipe Finder was created to prove that healthy 
  eating can be convenient, affordable, and genuinely delicious. 

  We showcase quick, whole-food dishes that anyone can master—no 
  fancy equipment, no ultra-processed shortcuts—just honest 
  ingredients and straightforward steps.

  Why we exist

  Cut through the noise. 
  The internet is bursting with recipes, yet most busy cooks 
  still default to take-away or packaged foods. We curate a 
  tight collection of fool-proof dishes so you can skip the 
  scrolling and start cooking.

  Empower home kitchens. 
  When you control what goes into your meals, you control how 
  you feel. Every recipe is built around unrefined ingredients 
  and ready in about half an hour of active prep.

  Make healthy look good. 
  High-resolution imagery shows you exactly what success looks 
  like—because we eat with our eyes first, and confidence matters.

  Our food philosophy

  Whole ingredients first. 
  Fresh produce, grains, legumes, herbs, and quality fats form the 
  backbone of every recipe.

  Flavor without compromise. 
  Spices, citrus, and natural sweetness replace excess salt, sugar, 
  and additives.

  Respect for time. 
  Weeknight meals should slot into real schedules; weekend cooking 
  can be leisurely but never wasteful.

  Sustainable choices. 
  Short ingredient lists cut down on food waste and carbon footprint, 
  while plant-forward dishes keep things planet-friendly.

  Beyond the plate

  We believe food is a catalyst for community and well-being. 
  By sharing approachable recipes, we hope to:

  Encourage family dinners and social cooking.
  Reduce reliance on single-use packaging and delivery waste.
  Spark curiosity about seasonal produce and local agriculture.

  Ready to cook smarter?

  Hit the button, pick a recipe, and get dinner on the table—fast.

  Browse recipes

  Made with ❤️ and 🥑 */}

