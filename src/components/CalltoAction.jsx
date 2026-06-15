import React from "react";
import ButtonRecipes from "./UI/ButtonRecipes";
import { Link } from "react-router-dom";
import forkpattern from "../assets/images/pattern-fork.svg";
import knifepattern from "../assets/images/pattern-knife.svg";

export default function CalltoAction() {
    return (
        
<>

<div className="call-to-action container">
 <h2 className="call-to-action__title"> Ready to cook smarter? </h2>
      <p className="call-to-action__description">
        Hit the button, pick a recipe, and get dinner on the table—fast.
      </p>
      <Link to="/recipes">
        <ButtonRecipes className="button-recipes">Browse recipes</ButtonRecipes>
      </Link>
   <img className="cta__fork-pattern" src={forkpattern} alt="fork pattern" />
  <img className="cta__knife-pattern" src={knifepattern} alt="knife pattern" />
</div>
</>
            
    )
}
