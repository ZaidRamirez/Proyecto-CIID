import React, { useEffect, useState } from 'react'
import imgEdit from "../assets/filter.png"
import axios from 'axios';


export const IndexNews = () => {

    const [query, setQuery] = useState("");
    const [dateNews, setDateNews] = useState("Day")
    const [results, setResults] = useState([]);
    const [editing, setEditing] = useState(false);
    const [filter, setFilter] = useState("0");
    const [search, setSearch] = useState(null);
    const filterIndex = {
        "0": null,
        "1": "Economía digital",
        "2": "Entretenimiento",
        "3": "Negocios"
    }

    //Función para obtener las noticias de la API
    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await axios.get(`https://api.bing.microsoft.com/v7.0/news`, {
                    params: {
                        count: 12,
                    },
                    headers: {
                        'Ocp-Apim-Subscription-Key': '5dfe3c8210c04ecb956b4dc17c7b3a39'
                    }
                });

                setResults(Object.values(response.data.value))
            } catch (error) {
                console.error("Error en Bing News:", error);
            }
        };
        getNews();
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
        let form = document.getElementById("form-filter");

        setFilter(form.filter.value);
        setSearch(form.search.value.trim());
        form.className = "d-none filter-news";
        setEditing(false);

        if (clear) {
            setFilter("0");
            document.querySelector('#filter option[value="0"]').selected = true;
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
                    <select className="form-select form-select-sm my-2" name="filter" id="filter">
                        <option value="0"> Filtrar </option>
                        <option value="1">Economía digital</option>
                        <option value="2">Entretenimiento</option>
                        <option value="3">Negocios</option>
                    </select>

                    <input type="text" placeholder="Busque una noticia" className="w-75" name='search' />

                    <input type="submit" value="Filtrar" onClick={handleSetFilter} />
                </form>
            </section>

            <hr className="my-1" />

            {/*div para mostrar los filtros */}

            {(filter !== null && filter !== "0") && (
                <div className="filters">
                    <p className="filter">
                        Filtrado por <span className='btn btn-outline-danger p-1' id='filter-name'>{filterIndex[filter]}</span>
                        <button className='btn btn-danger p-1 ms-2 btn-delete' onClick={(e) => handleSetFilter(e, true)}>Eliminar</button>
                    </p>
                </div>
            )}

            {/*Inicio de las noticias*/}
            <section className="content">
                {console.log('results antes del map', results)}
                {results.map(({name, description, datePublished}, index) => {

                    <div className="card my-2 shadow-sm" key={index}>
                        <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">
                                {description}
                            </p>
                            <p className="card-date">
                                {datePublished}
                            </p>
                            <a href="#" className="btn btn-secondary">Ver noticia</a>
                            <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                        </div>
                    </div>
                })}

            </section>
        </>
    )
}
