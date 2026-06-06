import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";

// import searchbutton from "../assets/images/icon-search.svg";
import CardRecipe from "../components/CardRecipe";
import data from "../data/data.json";
import ChoicesDropdownMenu from "../components/UI/ChoicesDropdownMenu";
import ChoicesCookTime from "../components/UI/ChoicesCookTime";



import React, { useState } from "react";




export default function Recipes( ) {
  const [selectedCookTime, setSelectedCookTime] = useState(null);
const [selectedPrepTime, setSelectedPrepTime] = useState(null);


 const [query, setQuery] = useState("");


// const filteredRecipes = data.filter(recipe => {

//   const matchesCookTime =
//    selectedCookTime ? recipe.cookMinutes <= parseInt(selectedCookTime) : true;
//   const matchesPrepTime = selectedPrepTime ? recipe.prepMinutes <= parseInt(selectedPrepTime) : true;
//   const matchesQuery = query ? recipe.title.toLowerCase().includes(query.toLowerCase()) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase())) : true;

//   return matchesCookTime && matchesPrepTime && matchesQuery;
  
// });
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

// const parse = (v) => {
//   if (!v) return null;
//   return parseInt(v.toString().replace(/[^\d]/g, ""));
// };

// const filteredRecipes = data.filter(recipe => {
//   const cookLimit = parse(selectedCookTime);
//   const prepLimit = parse(selectedPrepTime);

//   const matchesCook =
//     cookLimit !== null ? Number(recipe.cookMinutes) <= cookLimit : true;

//   const matchesPrep =
//     prepLimit !== null ? Number(recipe.prepMinutes) <= prepLimit : true;

//   const matchesQuery =
//     query
//       ? recipe.title.toLowerCase().includes(query.toLowerCase()) ||
//         recipe.ingredients.some(i =>
//           i.toLowerCase().includes(query.toLowerCase())
//         )
//       : true;

//   return matchesCook && matchesPrep && matchesQuery;
// });


console.log("Cook:", selectedCookTime);
console.log("Prep:", selectedPrepTime);
console.log("Query:", query);

  
console.log("FILTERED RESULTS:", filteredRecipes);

 console.log("COUNT:", filteredRecipes.length);

  return (
    <>
    <Navigation/>
    <section className="recipes">
    <h1 className="title__hero">Explore our simple, healthy recipes</h1>
    <p className="hero__text">Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
    <div className="wrapper__dropdown--menu">

      <div className="dropdown__menu--prepTime">

   <ChoicesDropdownMenu 
   
onChange={setSelectedPrepTime}
  
    />
 
      </div>
     {/* <div className="dropdown-menu">
                 <button className="dropdown-toggle" onClick={toggle}>
                     Max Prep Time <FaChevronDown />
                 </button>
                 <div className="dropdown-menu__list">
                    <a href="#" >0 Minutes</a>
                    <a href="#" >5 Minutes</a>
                    <a href="#" >10 Minutes</a>
                    <a href="#" >Clear</a>
                 </div>
    </div> */}

     <div className="dropdown__menu--cookingTime">
      <ChoicesCookTime
    
onChange={setSelectedCookTime}
   

/>
    

      {/* <div className="dropdown-menu">
                  <button className="dropdown-toggle" onClick={toggle}>
                     Max Cooking time <FaChevronDown />
                  </button>
                  <div className="dropdown-menu__list">
                      <a href="#" >0 Minutes</a>
                      <a href="#" >5 Minutes</a>
                      <a href="#" >10 Minutes</a>
                      <a href="#" >15 Minutes</a>
                      <a href="#" >20 Minutes</a>
                     
                      <a href="#" >Clear</a>
                  </div>
              </div> */}
      
      </div>
      <div className="search__button">

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
            title={recipe.title}
            slug={recipe.slug}
            image={recipe.image}
            servings={recipe.servings}
            prepMinutes={recipe.prepMinutes}
            cookMinutes={recipe.cookMinutes}
            
          />
          ))
          

        ) : (
          filteredRecipes.map((recipe) => (
            <CardRecipe
              key={recipe.id}
              title={recipe.title}
            slug={recipe.slug}
            image={recipe.image}
            servings={recipe.servings}
            prepMinutes={recipe.prepMinutes}
            cookMinutes={recipe.cookMinutes}
            
          />
           ))
          )}

      </div>

    </section>
    <CalltoAction/>
    <Footer/>

    </>
  )
    }