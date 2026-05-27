import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import Footer from './pages/Footer';

import Home from "./pages/home";
// import About from "./pages/about";
// import Recipe from "./pages/recipe";
// import Recipes from "./pages/recipes";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipe />} />
             {/* <Route path="/recipes" element={<recipes />} /> */}
             {/* <Route path="/recipes" element={<Recipes />} /> */} 

             
         
      </Routes>
    </BrowserRouter>
  );
}