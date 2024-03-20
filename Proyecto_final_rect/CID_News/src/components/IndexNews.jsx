import React, { useEffect, useState } from 'react'
import imgEdit from "../assets/filter.png"
import axios from 'axios';
import { formatDate } from '../helpers/formatDate';
import { getNews } from '../helpers/getNews';

export const IndexNews = () => {

    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [dateNews, setDateNews] = useState("Day")
    const [results, setResults] = useState([]);
    const [editing, setEditing] = useState(false);
    const [filter, setFilter] = useState("0");
    const filterIndex = {
        "0": "Pais",
        "1": "Economía digital",
        "2": "Entretenimiento",
        "3": "Negocios"
    }
    

    //Función para obtener las noticias de la API al momento de cargar la página
    useEffect(() => {
        getNews()
            .then(response => { setResults(response); })
            .catch(error => { console.error("Error al obtener las noticias:", error); });
    }, []);

    //Funcion para mostrar el formulario para filtrar resultados
    const handleShowFilter = (e) => {
        let form = document.getElementById("form-filter");

        if (!editing) {
            form.className = "d-block my-3 filter-news";
            setEditing(true);
        } else {
            form.className = "d-none filter-news";
            setEditing(false);
        }
    }

    //Función para filtrar los resultados
    const handleSetFilter = (e, clear = false) => {
        e.preventDefault();

        let selectData = e.target.value;
        setFilter(selectData);
        let q = `${filterIndex[selectData]}`;
        let form = document.getElementById("form-filter");
        
        form.className = "d-none filter-news";
        setEditing(false);

        if (!clear) {
        getNews(q, "Week")
            .then(response => { setResults(response); })
            .catch(error => { console.error("Error al obtener las noticias:", error); });
        }else{
            setFilter("0");
            document.querySelector('#filter option[value="0"]').selected = true;

            getNews()
            .then(response => { setResults(response); })
            .catch(error => { console.error("Error al obtener las noticias:", error); });
        }
    }

    return (
        <>
            {/*Titulo de la sección y apartado de filtro*/}
            <section className="news-header p-2">
                <div className="news-nav d-flex align-items-center justify-content-between">
                    <h2 className="p-0 m-0">Últimas noticias</h2>
                    <button className="container-image-filter" onClick={handleShowFilter}>
                        <span className="d-none">Filtrar </span>
                        <img src={imgEdit} alt="Filtrar" className="img-filter" />
                    </button>
                </div>

                {/*Formulario para filtrar las noticias*/}
                <form className="d-none my-3 filter-news" id='form-filter'>
                    <select 
                        className="form-select form-select-sm my-2" 
                        name="filter" 
                        id="filter" 
                        onChange={handleSetFilter}
                    >
                        <option value="0"> Filtrar </option>
                        <option value="1">Economía digital</option>
                        <option value="2">Entretenimiento</option>
                        <option value="3">Negocios</option>
                    </select>
                </form>
            </section>

            <hr className="my-1" />

            {/*div para mostrar los filtros */}

            {(filter !== "0") && (
                <div className="filters">
                    <p className="filter">
                        Filtrado por <span className='btn btn-outline-danger p-1' id='filter-name'>{filterIndex[filter]}</span>
                        <button className='btn btn-danger p-1 ms-2 btn-delete' onClick={(e) => handleSetFilter(e, true)}>Eliminar</button>
                    </p>
                </div>
            )}

            {/*Inicio de las noticias*/}
            <section className="content">

                {results.map(({ name, description, datePublished }, index) => (
                    <div className="card my-2 shadow-sm" key={index}>
                        <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">
                                {description}
                            </p>
                            <p className="card-date">
                                {formatDate(datePublished)}
                            </p>
                            <a href="#" className="btn btn-secondary">Ver noticia</a>
                            <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                        </div>
                    </div>
                )
                )
                }

            </section>
        </>
    )
}
