import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";

 import searchbutton from "../assets/images/icon-search.svg";
import CardRecipe from "../components/CardRecipe";
import data from "../data/data.json";
import ChoicesDropdownMenu from "../components/UI/ChoicesDropdownMenu";
import ChoicesCookTime from "../components/UI/ChoicesCookTime";



import React, { useState } from "react";




export default function Recipes( ) {
const [selectedCookTime, setSelectedCookTime] = useState(null);
const [selectedPrepTime, setSelectedPrepTime] = useState(null);


 const [query, setQuery] = useState("");


const parseTime = (value) => {
  if (!value) return null;
  return parseInt(value); 
};

const filteredRecipes = data.filter(recipe => {
  const cookLimit = selectedCookTime ? parseTime(selectedCookTime) : null;
  const prepLimit = selectedPrepTime ? parseTime(selectedPrepTime) : null;

  const matchesCook = cookLimit ? recipe.cookMinutes <= cookLimit : true;
  const matchesPrep = prepLimit ? recipe.prepMinutes <= prepLimit : true;

  const matchesQuery = query
    ? recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(i =>
        i.toLowerCase().includes(query.toLowerCase())
      )
    : true;

  return matchesCook && matchesPrep && matchesQuery;
});





console.log("Cook:", selectedCookTime);
console.log("Prep:", selectedPrepTime);
console.log("Query:", query);

  
console.log("FILTERED RESULTS:", filteredRecipes);

 console.log("COUNT:", filteredRecipes.length);

  return (
    <>
    <Navigation/>
    <section className="recipes">
    <h1 className="title__recipes">Explore our simple, healthy recipes</h1>
    <p className="recipes__text">Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
    <div className="wrapper__dropdown--menu">
    <div className="dropdown__menu--prepTime">
    <ChoicesDropdownMenu 
    onChange={setSelectedPrepTime}/>
    </div>
  

     <div className="dropdown__menu--cookingTime">
      <ChoicesCookTime
      onChange={setSelectedCookTime}
      />
    

      </div>
      <div className="search__button">

        <img src={searchbutton} alt="Search" className="search__icon" />
        <input
          type="text"
          placeholder="Search by name or ingredient"
          className="search__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
                 
        />
           
      </div>
</div>


      <div className="recipes__list">
        {query === "" ? (
          filteredRecipes.map((recipe) => (
            <CardRecipe
            key={recipe.id}
              slug={recipe.slug}
            title={recipe.title}
            overview={recipe.overview}
            image={recipe.image}
            servings={recipe.servings}
            prepMinutes={recipe.prepMinutes}
            cookMinutes={recipe.cookMinutes}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
          ))
          

        ) : (
          filteredRecipes.map((recipe) => (
          <CardRecipe
          key={recipe.id}
            slug={recipe.slug}
            title={recipe.title}
            overview={recipe.overview}
            image={recipe.image}
            servings={recipe.servings}
            prepMinutes={recipe.prepMinutes}
            cookMinutes={recipe.cookMinutes}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            
          />
           ))
          )}

      </div>

    </section>
    <CalltoAction/>
  

    </>
  )
    }