
import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import CardRecipe from "../components/CardRecipe";



export default function RecipeDetails() {
  const { slug } = useParams();


  const recipe = data.find((r) => r.slug === slug);

 if (!recipe) {
  return (
    <div className="not-found">
      <h2>Recipe not found</h2>
      <p>Please go back and try again.</p>
     
    </div>
  );
}

console.log("Slug from URL:", slug);
console.log("All recipes:", data);
console.log("Found recipe:", recipe);
  return (
    <>

   
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
/>

      {/* ingredients */}
      <section>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* instructions */}
      <section>
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

    </div>
    </>
  );
}