import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CalltoAction from "../components/CalltoAction";
import { FaChevronDown } from "react-icons/fa";
import searchbutton from "../assets/images/icon-search.svg";


export default function Recipes() {

  const toggle = () => {
        const dropdown = document.querySelector('.dropdown-menu');
        dropdown.classList.toggle('show');
        
    }

  return (
    <>
    <Navigation/>
    <section className="recipes">
    <h1 className="title__hero">Explore our simple, healthy recipes</h1>
    <p className="hero__text">Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
    <div className="wrapper__dropdown--menu">
     <div className="dropdown-menu">
                 <button className="dropdown-toggle" onClick={toggle}>
                     Max Prep Time <FaChevronDown />
                 </button>
                 <div className="dropdown-menu__list">
                    <a href="#" onClick={toggle}>0 Minutes</a>
                    <a href="#" onClick={toggle}>5 Minutes</a>
                    <a href="#" onClick={toggle}>10 Minutes</a>
                    <a href="#" onClick={toggle}>Clear</a>
                 </div>
    </div>

     <div className="dropdown__menu--cookingTime">
      <div className="dropdown-menu">
                  <button className="dropdown-toggle" onClick={toggle}>
                     Max Cooking time <FaChevronDown />
                  </button>
                  <div className="dropdown-menu__list">
                      <a href="#" onClick={toggle}>0 Minutes</a>
                      <a href="#" onClick={toggle}>5 Minutes</a>
                      <a href="#" onClick={toggle}>10 Minutes</a>
                      <a href="#" onClick={toggle}>15 Minutes</a>
                      <a href="#" onClick={toggle}>20 Minutes</a>
                     
                      <a href="#" onClick={toggle}>Clear</a>
                  </div>
              </div>
      
      </div>
      <div className="search__button">
       
        <input type="text" placeholder="Search by name or ingredient" className="search__input" 
        img src={searchbutton} />
       
      </div>

</div>

    </section>
    <CalltoAction/>
    <Footer/>

    </>
  )
    }