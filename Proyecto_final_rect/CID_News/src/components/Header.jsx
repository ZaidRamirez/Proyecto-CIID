import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export const Header = () => {
    return (
        <nav className="navbar p-0">
            {/*Barra de navegación*/}
            <div className="container-fluid py-1 px-3 border-bottom border-secondary-subtle align-items-center">
                <Link to="/" className='navbar-brand'>
                    <h1 className="m-0 fs-5">CID News</h1>
                </Link>
                <ul className="navbar-nav d-flex flex-row gap-3">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </div>

            {/*Fecha del día de hoy*/}
            <div
                className="container-fluid py-1 px-3 align-items-center border-bottom border-secondary-subtle date-container">
                <p className="m-1 date">Lunes, 15 de Marzo, 2024</p>
            </div>
        </nav>
    )
}
