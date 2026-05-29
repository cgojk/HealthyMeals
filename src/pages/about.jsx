
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";
import imageAbout from "../assets/images/image-about-our-mission-small.webp";
import imagebeyonplate from  "../assets/images/image-about-beyond-the-plate-small.webp";
import arrow from "../assets/images/icon-bullet-point.svg";
import InfoItemAbout from "../components/InfoItemAbout";
import dataInfoAbout from "../data/Aboutdatainfo.js";

export default function About() {
  return (
    <>
    <Navigation/>
    <section className="about container">
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
            <img src={imageAbout} alt="About" loading="lazy" className="about__image" />
          </div>
      </div>

      <section className="about__section--info">
 
          <h2 className="about__subtitle">Why we exist</h2>
          <ul className="about__text">
            <InfoItemAbout
              arrow={dataInfoAbout[0].arrow}
              title={dataInfoAbout[0].title}
              description={dataInfoAbout[0].description}
            />
            <InfoItemAbout
              arrow={dataInfoAbout[1].arrow}
              title={dataInfoAbout[1].title}
              description={dataInfoAbout[1].description}
            />
            <InfoItemAbout
              arrow={dataInfoAbout[2].arrow}
              title={dataInfoAbout[2].title}
              description={dataInfoAbout[2].description}
            />
           
            
              {/* <li className="wrapper__info--item">
                <div className="wrapper__image--arrow">
                  <img src={arrow} alt="Arrow" className="about__icon--arrow" />
               </div>
                <div className="wrapper__subtitle--description">
                    <div className="arrow_subtitle">
                      <h3 className="about__subtitle--info">Cut through the noise. </h3>
                    </div>
                    <div className="about__description">
                      <p className="about__description--info"> The internet is bursting with recipes, yet most busy cooks 
                        still default to take-away or packaged foods. We curate a 
                      tight collection of fool-proof dishes so you can skip the 
                      scrolling and start cooking.
                    </p>
                    </div>
                </div>
              </li>

               
             <li className="wrapper__info--item">

               <div className="wrapper__image--arrow">
                 <img src={arrow} alt="Arrow" className="about__icon--arrow" />
               </div>
              <div className="wrapper__subtitle--description">
                 <div className="arrow_subtitle">
                   <h3 className="about__subtitle--info">Empower home kitchens. </h3>
                </div>
                 <div className="about__description">
                    <p className="about__description--info">When you control what goes into your meals, you control how 
                    you feel. Every recipe is built around unrefined ingredients 
                    and ready in about half an hour of active prep.
                    </p>
                  </div>
                </div>
              </li> */}

              {/* <li className="wrapper__info--item">

                <div className="wrapper__image--arrow">
                   <img src={arrow} alt="Arrow" className="about__icon--arrow" />
                </div>
                <div className="wrapper__subtitle--description">
                   <div className="arrow_subtitle">
                     <h3 className="about__subtitle--info">Make healthy eating inclusive. </h3>
                  </div>
                   <div className="about__description">
                      <p className="about__description--info">We celebrate the diversity of home cooks and palates, 
                        offering a range of flavors and dietary preferences without 
                        ever sacrificing simplicity or taste.
                      </p>
                    </div>
                  </div>
              </li> */}
                  
          </ul>

        

      </section>


      <section className="about__section--info">

          <h2 className="about__subtitle">Our philosophy</h2>
          <ul className="about__text">
             <InfoItemAbout
              arrow={dataInfoAbout[3].arrow}
              title={dataInfoAbout[3].title}
              description={dataInfoAbout[3].description}
            />
              <InfoItemAbout
              arrow={dataInfoAbout[4].arrow}
              title={dataInfoAbout[4].title}
              description={dataInfoAbout[4].description}
            />
              <InfoItemAbout
              arrow={dataInfoAbout[5].arrow}
              title={dataInfoAbout[5].title}
              description={dataInfoAbout[5].description}
            />
            
          </ul>
          
 </section>

 <section className="About__section--beyond">
        <div className="beyond__text">
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
          </div>
          <div className="image__beyond">
            <img src={imagebeyonplate} alt="Beyond the plate" loading="lazy" className="about__image--beyond" />
          </div>
      </section>
    </section>
    <section className="recipes__section">
     <CalltoAction/>
    </section>
    <Footer/>
    </>
    
  )
}
  

  


  

