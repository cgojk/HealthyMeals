import React from 'react';
import imagepeopleservings from "../assets/images/icon-servings.svg";
import imagepreptime from "../assets/images/icon-prep-time.svg";
import imagecooktime from "../assets/images/icon-cook-time.svg";
import ButtonRecipes from './UI/ButtonRecipes';
import classNames from "classnames";
import { Link } from 'react-router-dom';






export default function CardRecipe({
        slug,
        title,
        image={},
        overview, 
        servings, 
        prepMinutes,
         cookMinutes, 
         showLink=true,
         variant="default",
            className=""
        
         
    }) {

  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
  };

  
const cardClasses =classNames("card-recipe", variant === "details" && "card-recipe--details", className);

  const imageUrl =image?.large? getImageUrl(image.large)
    : image?.small? getImageUrl(image.small): '';

    return (
        <div className={cardClasses}>
           
            <picture className="card-recipe__image-wrapper">
                <source media="(max-width: 768px)" srcSet={getImageUrl(image.small)} />
                <source media="(min-width: 769px)" srcSet={getImageUrl(image.large)} />
                 <img src={imageUrl} alt={title} className="card-recipe__image" />
            </picture>
            

            <h2 className="card-recipe__title">{title}</h2>
            <p className="card-recipe__description">{overview}</p>
            <div className="servingprep__cook">
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
             
             {showLink && (
          
                <Link to={`/recipes/${slug}`} className="card-recipe__link">
                    <ButtonRecipes variant="recipes" size="small" className="button-view-recipe" >
                        View Recipe
                    </ButtonRecipes>
                </Link>
            )}
           
        </div>
    )
}