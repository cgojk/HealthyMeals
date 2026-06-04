import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"


const MenuContext = React.createContext()

export default function Menu({ children }) {
 
    const [open, setOpen] = React.useState(false)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
        console.log("toggle", open)
    }

    return (
        <MenuContext.Provider value={{ open, toggle }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}



export {MenuContext}