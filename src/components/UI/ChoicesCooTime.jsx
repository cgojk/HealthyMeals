import Menu from "./Menu";
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"


export default function ChoicesDropdownMenu() {

    const cookTime =["0 Minutes", "5 Minutes", "10 Minutes", "15 Minutes", "20 Minutes", "Clear"]
    
    return (
        <Menu>
            <MenuButton>Max Cooking Time</MenuButton>
            <MenuDropdown>
                {cookTime.map((item, index) => (
                    <MenuItem key={index}>{item}</MenuItem>
                ))}
            </MenuDropdown>
              

        </Menu>
    )
}