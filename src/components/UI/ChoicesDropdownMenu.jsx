import Menu from "./Menu";
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"
import React from "react"









export default function ChoicesDropdownMenu() {

    const items =["0 Minutes", "5 Minutes", "10 Minutes", "15 Minutes", "Clear"]
      
  

   
    return (
        <Menu>
            <MenuButton>Max Prep Time</MenuButton>
                <div>
            <MenuDropdown>
                {items.map((item, index) => (

                    <MenuItem 
                    key={index}>
                       

                        {item}
                    </MenuItem>
                ))}
            </MenuDropdown>
              </div>

        </Menu>
    )
}
                
         
    
