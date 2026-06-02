import React from 'react';




export default function CardRecipe({
    title, slug,  image={}, servings, prepMinutes, cookMinutes}) {

  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
  };

//  appears large image depeding of the siz oe the page if <768px it will appears small image it more thant 768 large iamge 



  const imageUrl =  getImageUrl(image.large) || getImageUrl(image.small) || '';
   
    return (
        <div className="card-recipe">
           
            <img src={imageUrl} alt={title} className="card-recipe__image" />
        

            <h3 className="card-recipe__title">{title}</h3>
            <p className="card-recipe__description">{slug}</p>
            <div className="servingprep__cook">
                <p className="servingprep__cook--serving">Serves: {servings}</p>
                <p className="servingprep__cook--prep">Prep: {prepMinutes} mins</p>
                <p className="servingprep__cook--cook">Cook: {cookMinutes} mins</p>
            </div>
            <button className="card-recipe__button">View Recipe</button>

        </div>
    
    )
}