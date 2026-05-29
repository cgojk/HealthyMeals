
import React from "react";


export default function InfoItemAbout({arrow, title, description}) {
    return(
        
                 
                      <li className="wrapper__info--item">
                        <div className="wrapper__image--arrow">
                          <img src={arrow} alt="Arrow" className="about__icon--arrow" />
                       </div>
                        <div className="wrapper__subtitle--description">
                            <div className="arrow_subtitle">
                              <h3 className="about__subtitle--info">{title}</h3>
                            </div>
                            <div className="about__description">
                              <p className="about__description--info">{description}</p>
                            </div>
                        </div>
                      </li>
                           
        
    )
    }
