import Menu from "./Menu";
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"

 import React from "react"


export default function ChoicesCookTime({onChange}) {
   
    const cookTime =["0 Minutes", "5 Minutes", "10 Minutes", "15 Minutes", "20 Minutes", "Clear"]
    
    
    return (
        <Menu>
            <MenuButton showArrow={true}>Max Cook Time</MenuButton>
            
            <MenuDropdown>
                {cookTime.map((item, index) => (
                    <MenuItem key={index}
                    onClick={()=>{
                        onChange(item);
                    }}
                    
                    >

                    {item}</MenuItem>
                ))}
            </MenuDropdown>
                    

        </Menu>
    )
}