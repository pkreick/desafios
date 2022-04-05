import './navBar.css';

import CartWidget from '../CartWidget';
import React from 'react';

export const NavBar = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">categoriaA</a>
                </li>
                <li>
                    <a href="#">categoriaB</a>
                </li>
                <li>
                    <a href="#"><CartWidget /></a>
                </li>
            </ul>
        </nav>
        </>
     );
}
 
export default NavBar;
