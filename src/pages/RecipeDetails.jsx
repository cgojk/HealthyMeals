
import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import CardRecipe from "../components/CardRecipe";
import { Link } from "react-router-dom";
import arrow from "../assets/images/icon-bullet-point.svg";


export default function RecipeDetails() {
  const { slug } = useParams();

React.useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}, [slug]);

  const recipe = data.find((r) => r.slug === slug);

 if (!recipe) {
  return (
    <div className="not-found">
      <h2>Recipe not found</h2>
      <p>Please go back and try again.</p>
     
    </div>
  );
}




const shuffledData = [...data].sort(() => 0.5 - Math.random());


const getOtherRecipes = (shuffledData, slug) => {
  return shuffledData
    .filter((r) => r.slug !== slug)
    .slice(0, 3);
};
// const otherRecipes = data
//   .filter((r) => r.slug !== slug)
//   .sort(() => Math.random() - 0.5)
//   .slice(0, 3);



console.log("Slug from URL:", slug);
console.log("All recipes:", data);
console.log("Found recipe:", recipe);
  return (
    <>
<section className="recipe-details-section">

   <nav className="breadcrumb">
       <Link className="breadcrumb__link" to="/recipes">
          Recipes
       </Link>
       <span> / </span>
       <span className="breadcrumb__current">{recipe.title}</span>
   </nav>

    <div className="recipe-details">

      {/* reuse card for header */}
    <CardRecipe
        slug={recipe.slug}
        key={recipe.id}
        title={recipe.title}
        image={recipe.image}
        overview={recipe.overview}
        servings={recipe.servings}
        prepMinutes={recipe.prepMinutes}
        cookMinutes={recipe.cookMinutes}
        showLink={false}
        variant="details"
    />
    </div>

<div className="recipe-details__ingredients-instructions">
  <div className="recipe-details__ingredients">
        {/* ingredients */}
        <h2 className="recipe-details__title">Ingredients</h2>
        {/* <ul className="list__details_ingredients">
          {recipe.ingredients.map((item, i) => (
            <div className="ing__item">
                <img className="recipe-details__arrow" src={arrow} alt="Arrow" />
            <li className="ing__item--list"
             key={i}>
              
              {item}
            </li>
            </div>
          ))}
        </ul> */}

        <ul>
           {recipe.ingredients.map((item, i) => (
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
        <ul className="list__details_instructions">
          {recipe.instructions.map((step, i) => (
            <div className="inst__item" key={i}>
                  <img className="recipe-details__arrow" src={arrow} alt="Arrow" />
              <li className="inst__item--list" key={i}>
              
                {step}
              </li>
            </div>
          ))}
        </ul>
      </div>
      </div>

  


    </section>

    <section className="other__recipes">

        <h2 className="other__recipes--title">Other recipes you might like</h2>
        <div className="other__recipes--list">
       {getOtherRecipes(shuffledData, slug).map((recipe) => (
          <CardRecipe
            key={recipe.id}
            slug={recipe.slug}
            title={recipe.title}
            image={recipe.image}
            overview={recipe.overview}
            servings={recipe.servings}
            prepMinutes={recipe.prepMinutes}
            cookMinutes={recipe.cookMinutes}
            
            
          />
        ))}
        </div>

    </section>

</>
  );
}
