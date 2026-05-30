
import React from 'react';
import { FaChevronDown } from "react-icons/fa";

export default function DropdownMenu() {

    const toggle = () => {
        const dropdown = document.querySelector('.dropdown-menu');
        dropdown.classList.toggle('show');
    }

    return (
        <div className="dropdown-menu">
            <button className="dropdown-toggle" onClick={toggle}>
                Max Prep <FaChevronDown />
            </button>
            <ul>
                <li><a href="#" onClick={toggle}>0 Minutes</a></li>
                <li><a href="#" onClick={toggle}>5 Minutes</a></li>
                <li><a href="#" onClick={toggle}>10 Minutes</a></li>
                <li><a href="#" onClick={toggle}>Clear</a></li>
            </ul>
        </div>
    );
}