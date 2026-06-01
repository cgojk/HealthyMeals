import React from 'react';



export default function CardRecipe({title, slug, large, small, servings, prepMinutes, CookMinutes}) {
    return (
        <div className="card-recipe">
            <picture>
                <source srcSet={large} media="(min-width: 768px)" />
                <img src={small} alt={title} className="card-recipe__image" />
            </picture>
            <h3 className="card-recipe__title">{title}</h3>
            <p className="card-recipe__description">{slug}</p>
            <div className="servingprep__cook">
                <p className="servingprep__cook--serving">Serves: {servings}</p>
                <p className="servingprep__cook--prep">Prep: {prepMinutes} mins</p>
                <p className="servingprep__cook--cook">Cook: {CookMinutes} mins</p>
            </div>
            <button className="card-recipe__button">View Recipe</button>

        </div>
    
    )
}