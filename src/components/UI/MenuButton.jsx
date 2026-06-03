import React from "react"
import ButtonRecipes from "./ButtonRecipes"

export default function MenuButton({ children, onClick }) {
    return (
        <ButtonRecipes  size="large" onClick={onClick}>
            {children}
        </ButtonRecipes>
    )
}