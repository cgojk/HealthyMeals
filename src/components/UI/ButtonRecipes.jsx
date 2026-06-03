import React from "react"
import classnames from "classnames";

export default function ButtonRecipes ({children, className, size, ...rest}){
 

    let sizeClass = size && `button-recipes--${size}`;
   
    
    const allClasses = classnames(sizeClass, className) 
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}