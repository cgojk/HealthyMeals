import Menu from "./Menu";
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"
import React from "react"




export default function ChoicesDropdownMenu({onChange}) {

    const items =["0 Minutes", "5 Minutes", "10 Minutes", "15 Minutes", "Clear"]
      
  

   
    return (
        <Menu>
            <MenuButton showArrow={true}>Max Prep Time</MenuButton>
              
            <MenuDropdown>
                {items.map((item, index) => (

                    <MenuItem 
                    onClick={()=>{
                        onChange(item);
                    }}
                    key={index}>
                       

                        {item}
                    </MenuItem>
                ))}
            </MenuDropdown>
             

        </Menu>
    )
}
                
         
    
