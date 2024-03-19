import React from 'react'
import imgEdit from "../assets/filter.png"
import {Link} from "react-router-dom"

export const IndexNews = () => {
    return (
        <>
            {/*Titulo de la sección y apartado de filtro*/}
            <section className="news-header p-2">
                <div className="news-nav d-flex align-items-center justify-content-between">
                    <h2 className="p-0 m-0">Últimas noticias</h2>
                    <button className="container-image-filter">
                        <span className="d-none">Filtrar </span>
                        <img src={imgEdit} alt="Filtrar" className="img-filter" />
                    </button>
                </div>

                {/*Formulario para filtrar las noticias*/}
                <form className="d-none my-3 filter-news">
                    <select className="form-select form-select-sm my-2" name="filter" id="filter">
                        <option defaultValue> Filtrar </option>
                        <option value="digital">Economía digital</option>
                        <option value="entertainment">Entretenimiento</option>
                        <option value="business">Negocios</option>
                    </select>

                    <input type="text" placeholder="Busque una noticia" className="w-75" />

                    <input type="submit" value="Filtrar" />
                </form>
            </section>

            <hr className="my-1" />

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
                        <Link to="/lists">Este es un link de prueba</Link>
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
