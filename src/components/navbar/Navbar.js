import React from 'react';
import Logo from '../../images/Logo.svg';
import UsuarioIcon from '../../images/UsuarioIcon.svg';
import '../../components/navbar/Navbar.css';

export const Navbar = () => {
    return (
        <>
           <nav className = "Contenedor-Nav">
                <a 
                href = "/#" 
                className = "Logo"
                >
                   <img src = { Logo } alt = "Logo"/>
                </a>
                <div className = "Contenedor-menu">
                    <ul className ="nav-enlaces">
                        <a href = "/#"
                        className = ""
                        >
                            <li>Acerca de</li> 
                         </a>
                        <a href = "/#">
                            <li>Materiales</li>
                        </a>               
                    </ul>
                    <a href = "/#" 
                    className = "Usuario-icon"
                    >
                        <img src = { UsuarioIcon } alt = "Usuario" className = "UsuarioIcon"/>
                    </a>  
                </div> 
           </nav>
        </>
    )
}

export default Navbar;
