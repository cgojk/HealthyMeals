import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";
import { FaChevronDown } from "react-icons/fa";
// import searchbutton from "../assets/images/icon-search.svg";
import CardRecipe from "../components/CardRecipe";
import data from "../data/data.json";
import ChoicesDropdownMenu from "../components/UI/ChoicesDropdownMenu";
import ChoicesCookTime from "../components/UI/ChoicesCookTime";



import React, { useState } from "react";




export default function Recipes() {

 const [query, setQuery] = useState("");





  

 

  return (
    <>
    <Navigation/>
    <section className="recipes">
    <h1 className="title__hero">Explore our simple, healthy recipes</h1>
    <p className="hero__text">Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
    <div className="wrapper__dropdown--menu">

      <div className="dropdown__menu--prepTime">

   <ChoicesDropdownMenu 
   
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
      <ChoicesCookTime />

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
          data.map((recipe) => (
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
          data.filter((recipe) => {
            const titleMatch = recipe.title.toLowerCase().includes(query.toLowerCase());
            const ingredientMatch = recipe.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(query.toLowerCase())
            );
            return titleMatch || ingredientMatch;

          }).map((recipe) => (
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