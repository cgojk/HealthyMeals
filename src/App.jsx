import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import Footer from './pages/Footer';

import Home from "./pages/home";
import About from "./pages/about";
import Recipes from "./pages/recipes";
import RecipesDetails from "./pages/recipeDetails";

import Layout from "./components/Layout";
// import About from "./pages/about";
// import Recipe from "./pages/recipe";
// import Recipes from "./pages/recipes";



export default function App() {
  return (

    <BrowserRouter>
    
      <Routes>
        <Route element ={<Layout/>}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/about" element={<About /> */}
      
             <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:slug" element={<RecipesDetails />} />
             {/* <Route path="/recipes" element={<Recipes />} /> */} 

             
         </Route>
      </Routes>

    </BrowserRouter>
  );
}