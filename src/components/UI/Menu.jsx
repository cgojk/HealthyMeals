import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"


const MenuContext = React.createContext()

export default function Menu({ children }) {
 
    const [open, setOpen] = React.useState(false)
    
   
    const menuId = React.useId()

    function toggle() {
        setOpen(prevOpen => !prevOpen)
        console.log("toggle", open)
    }
    function handleItemClick() {
        console.log("Item clicked")
        // const selectedValue = event.target.textContent
        // console.log("Selected value:", selectedValue)
         
        setOpen(false)
    }

   
   

    return (
        <MenuContext.Provider value={{ open, toggle, handleItemClick, menuId }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}



export {MenuContext}