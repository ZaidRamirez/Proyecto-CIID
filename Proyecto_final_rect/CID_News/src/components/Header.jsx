import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../helpers/formatDate';


export const Header = () => {

    //Obtenemos la fecha de hoy y la convertimos con la función formatDate
    let date = new Date();
    let newDate = formatDate(date);
    

    return (
        <nav className="navbar p-0">
            {/*Barra de navegación*/}
            <div className="container-fluid py-1 px-3 border-bottom border-secondary-subtle align-items-center">
                <Link to="/" className='navbar-brand'>
                    <h1 className="m-0 fs-5">CID News</h1>
                </Link>
            </div>

            {/*Fecha del día de hoy*/}
            <div
                className="container-fluid py-1 px-3 align-items-center border-bottom border-secondary-subtle date-container">
                <p className="m-1 date">{newDate}</p>
            </div>
        </nav>
    )
}
