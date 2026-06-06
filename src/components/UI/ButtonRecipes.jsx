import React from "react"
import classnames from "classnames";
import { FaArrowDown } from 'react-icons/fa';

export default function ButtonRecipes 
({children,
     className,
      size,
    
      showArrow = false,
        arrowOpen = false,
       ...rest}){
 

  const allClasses = classnames(  size && `button-recipes--${size}`, className);
   
    
   
    
   

    return (
        <button className={allClasses} {...rest}>
            {children}
            {showArrow && <FaArrowDown
                className={arrowOpen ? 'arrow arrow-open' : 'arrow'}
             />}
           
        </button>
    )
}