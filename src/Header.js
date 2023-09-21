import React from "react";
import './styles/style.css'


function Header (abcxyz) {
    const name = abcxyz.name
    return ( 
        <div className="app-header">
            <h1>Day la header: {name}</h1>
        </div>
     );
}

export default Header;