import React from "react"
import {MenuContext} from "./Menu"


export default function MenuItem({children, onClick}) {
    const {handleItemClick} = React.useContext(MenuContext)
    
return (
    <div
      className="menu-item"
      onClick={() => {
        handleItemClick();
        onClick?.(children);   
      }}
    >
      {children}
    </div>
  );
}