import React from 'react'
import CartWidget from './cartWidget'
import './NavBar.css'



function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"/>
            <div className="inicio">
            <a type="button" href="#!" class="btn btn-light">Inicio</a>
            </div>
            <div className= "centro">
            <a class="navbar-brand text-light " href="#!">Productos</a>
            <a class="navbar-brand text-light " href="#!">Contacto</a>
            <a class="navbar-brand text-light " href="#!">Sobre Nosotros</a>
            </div>
            <div className="login">
            <a type="button" href="#!" class="btn btn-light">Login</a>
            </div>
            <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar
