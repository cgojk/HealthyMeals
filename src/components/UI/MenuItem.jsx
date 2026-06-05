import React from "react"
import {MenuContext} from "./Menu"


export default function MenuItem({children}) {
    const {handleItemClick} = React.useContext(MenuContext)
    

    return (
        <div
            className="menu-item"
            onClick={handleItemClick}
            
        
        >
            {children}
        </div>
    )
}