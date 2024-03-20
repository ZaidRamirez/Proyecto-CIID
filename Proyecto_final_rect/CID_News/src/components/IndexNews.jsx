import React, { useState } from 'react'
import imgEdit from "../assets/filter.png"
import {Link} from "react-router-dom"

export const IndexNews = () => {
    
    const [editing,setEditing] = useState(false);
    const [filter,setFilter] = useState(0);
    const [search,setSearch] = useState("");
    const filterIndex ={
        "0" : null,
        "1" : "Economía digital",
        "2" : "Entretenimiento",
        "3" : "Negocios"
    }
    
    //Funcion para mostrar el formulario para filtrar resultados
    const handleShowFilter = (e) =>{
        let form = document.getElementById("form-filter");

        if(!editing){
            form.className = "d-block my-3 filter-news";
            setEditing(true);
        }else{
            form.className = "d-none filter-news";
            setEditing(false);
        }
    }

    //Función para filtrar los resultados
    const handleSetFilter = (e) =>{
        e.preventDefault();
        let form = document.getElementById("form-filter");

        setFilter(form.filter.value);
        setSearch(form.search.value.trim());
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

                    <input type="text" placeholder="Busque una noticia" className="w-75" name='search'/>

                    <input type="submit" value="Filtrar" onClick={handleSetFilter}/>
                </form>
            </section>

            <hr className="my-1" />

            {/*div para mostrar los filtros */}
            {  }
            <div className="filters">
                <p className="filter">Filtrado por <span>{filterIndex[filter]}</span></p>
            </div>

            {/*Inicio de las noticias*/}
            <section className="content">
                
                <div className="card my-2 shadow-sm">
                    <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre noticia</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p className="card-date">
                            Lunes, 15 de Marzo, 2024
                        </p>
                        <a href="#" className="btn btn-secondary">Ver noticia</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                    </div>
                </div>

                <div className="card my-2 shadow-sm">
                    <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre noticia</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p className="card-date">
                            Lunes, 15 de Marzo, 2024
                        </p>
                        <a href="#" className="btn btn-secondary">Ver noticia</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                    </div>
                </div>
                <div className="card my-2 shadow-sm">
                    <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre noticia</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p className="card-date">
                            Lunes, 15 de Marzo, 2024
                        </p>
                        <a href="#" className="btn btn-secondary">Ver noticia</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                    </div>
                </div>
                <div className="card my-2 shadow-sm">
                    <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre noticia</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p className="card-date">
                            Lunes, 15 de Marzo, 2024
                        </p>
                        <a href="#" className="btn btn-secondary">Ver noticia</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                    </div>
                </div>
                <div className="card my-2 shadow-sm">
                    <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre noticia</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p className="card-date">
                            Lunes, 15 de Marzo, 2024
                        </p>
                        <a href="#" className="btn btn-secondary">Ver noticia</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                    </div>
                </div>
                <div className="card my-2 shadow-sm">
                    <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre noticia</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p className="card-date">
                            Lunes, 15 de Marzo, 2024
                        </p>
                        <a href="#" className="btn btn-secondary">Ver noticia</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                    </div>
                </div>
                <div className="card my-2 shadow-sm">
                    <img src="https://picsum.photos/1000" className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre noticia</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p className="card-date">
                            Lunes, 15 de Marzo, 2024
                        </p>
                        <a href="#" className="btn btn-secondary">Ver noticia</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar a una lista</a>

                    </div>
                </div>

            </section>
        </>
    )
}
