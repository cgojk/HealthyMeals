import React from "react"
import ButtonRecipes from "./ButtonRecipes"
import {MenuContext} from "./Menu"

export default function MenuButton({ children}) {
    const { toggle, open, menuId } = React.useContext(MenuContext)
    return (
        <ButtonRecipes  
        onClick={toggle} 
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        >
            {children}
        </ButtonRecipes>
    )
}