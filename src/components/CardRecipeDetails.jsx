import React from 'react';
import imagepeopleservings from "../assets/images/icon-servings.svg";
import imagepreptime from "../assets/images/icon-prep-time.svg";
import imagecooktime from "../assets/images/icon-cook-time.svg";
import arrow from "../assets/images/icon-bullet-point.svg"

export default function CardRecipeDetails({
        slug,
        title,
        image={},
        overview, 
        servings, 
        prepMinutes,
        cookMinutes, 
        ingredients={},
        instructions={}
                 
    }) {

//   const getImageUrl = (path) => {
//     return new URL(path, import.meta.url).href;
//   };

// //   image not found  palceholder funciton
// const getPlaceholderImage = () => {
//   return new URL("../assets/images/banana-pancakes-small.webp", import.meta.url).href;
// };

//   const imageUrl =image?.large? getImageUrl(image.large)
//     : image?.small? getImageUrl(image.small): getPlaceholderImage();

    return (
        <div className="card__recipe--details">
           
            <picture className="card-recipe__image-wrapper">
                <source media="(max-width: 768px)" srcSet={image.small} />
                <source media="(min-width: 769px)" srcSet={image.large} />
                 <img src={image.large || image.small} alt={title} className="card-recipe__image" />
            </picture>
            
         <div className="info__recipe">

            <h2 className="card-recipe__title">{title}</h2>
            <p className="card-recipe__description">{overview}</p>
            <div className="servingprep__cook--details">
                <div className="servingprep__cook--serving">
                    <img src={imagepeopleservings} alt="Servings" />
                    Serves: {servings}
                </div>
                <div className="servingprep__cook--prep">
                    <img src={imagepreptime} alt="Prep Time" />
                    Prep: {prepMinutes} mins
                </div>
                <div className="servingprep__cook--cook">
                    <img src={imagecooktime} alt="Cook Time" />
                    Cook: {cookMinutes} mins
                </div>
            </div>

                
              <div className="recipe-details__ingredients">
                    {/* ingredients */}
                    <h2 className="recipe-details__title">Ingredients</h2>
                    <ul>
                                {ingredients.map((item, i) => (
                                <li className="ing__item" key={i}>
                                <img
                                className="recipe-details__arrow"
                                src={arrow}
                                alt="arrow separate items ingredients"
                            />
                            {item}
                            </li>
                        ))}
                    </ul>
            
                  </div>
            
                  {/* instructions */}
                  <div className="recipe-details__instructions">
                    <h2 className="Instructions__title">Instructions</h2>
                    <ul>
                      {instructions.map((step, i) => (
                        <li className="inst__item" key={i}>
                              <img className="recipe-details__arrow" 
                              src={arrow} 
                              alt="Arrow"
                               />
                         {step}
                          </li>
                      
                      ))}
                    </ul>
                  </div>
            </div>

        </div>
    )
}