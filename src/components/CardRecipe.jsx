import React from 'react';
import imagepeopleservings from "../assets/images/icon-servings.svg";
import imagepreptime from "../assets/images/icon-prep-time.svg";
import imagecooktime from "../assets/images/icon-cook-time.svg";
import ButtonRecipes from './UI/ButtonRecipes';




export default function CardRecipe({
    title,  image={},  overview, servings, prepMinutes, cookMinutes}) {

  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
  };

//  appears large image depeding of the siz oe the page if <768px it will appears small image it more thant 768 large iamge 



  const imageUrl =  getImageUrl(image.large) || getImageUrl(image.small) || '';
   
    return (
        <div className="card-recipe">
           
            <picture className="card-recipe__image-wrapper">
                <source media="(max-width: 768px)" srcSet={getImageUrl(image.small)} />
                <source media="(min-width: 769px)" srcSet={getImageUrl(image.large)} />
                 <img src={imageUrl} alt={title} className="card-recipe__image" />

{/*                
                <img src={imageUrl} alt={title} className="card-recipe__image" /> */}
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
            <ButtonRecipes variant="recipes" size="small">
                View Recipe
            </ButtonRecipes>
        </div>
    
    )
}