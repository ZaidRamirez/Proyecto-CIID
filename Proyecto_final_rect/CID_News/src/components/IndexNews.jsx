import React, { useEffect, useState } from 'react'
import imgEdit from "../assets/filter.png"
import { getNews } from '../helpers/getNews';
import { formatDate } from '../helpers/formatDate';
import { scrollToTop } from '../helpers/scrollToTop';
import { toggleScroll } from '../helpers/toggleScroll';

export const IndexNews = () => {

    const [newsActive, setNewsActive] = useState();
    const [results, setResults] = useState([]); //Estado en donde guardamos el JSON resultante de nuestra petición a la API
    const [index, setIndex] = useState(0); //Estado en donde guardamos la página actual de noticias para mostrar solo una parte de todo el resultado
    const [editing, setEditing] = useState(false); //Estado que nos indica si vamos a mostrar o no el formulario para filtrar las noticias
    const [filter, setFilter] = useState("0"); //Estado que nos indica el indice del filtro que vamos a usar para las noticias
    const [show, setShow] = useState(false);

    const maxResults = 8; //Declaramos el numero  de noticias que van a aparecer por página
    const sliceResults = results.slice(index * maxResults, index * maxResults + maxResults); //Hacemos un corte usando el indice y el numero de noticias por pag

    //Indice del filtro para las noticias
    const filterIndex = {
        "0": "Pais",
        "1": "Economía digital",
        "2": "Entretenimiento",
        "3": "Negocios"
    }

    //Obtenemos las noticias de la API al momento de cargar la página y no las filtramos
    useEffect(() => {
        getNews()
            .then(response => { setResults(response); })
            .catch(error => { console.error("Error al obtener las noticias:", error); });
    }, []);

    //Funcion para mostrar el formulario para filtrar resultados
    const handleShowFilter = (e) => {
        let form = document.getElementById("form-filter");

        if (!editing) { //Si editing es false (Lo que significa que NO estamos editando) y entramos a la función entonces se abre el formulario para filtrar
            form.className = "d-block my-3 filter-news";
            setEditing(true); //Declaramos que ahora si estamos editando los filtros
        } else { //Si editing es true (Lo que significa que SI estamos editando) y entramos a la función entonces se abre el formulario para filtrar
            form.className = "d-none filter-news";
            setEditing(false); //Declaramos que ahora no estamos editando los filtros
        }
    }

    //Función para poner un filtro a la busqueda de noticias
    const handleSetFilter = (e, clear = false) => {
        //Declaramos dos parametros, primero los datos del evento y segundo un clear para el momento en el que presionemos el boton de eliminar filtro


        let form = document.getElementById("form-filter"); //Obtenemos el formulario de filtros
        form.className = "d-none filter-news"; //Ocultamos el formulario
        setEditing(false); //Declaramos que ya no estamos filtrando el formulario

        if (!clear) {
            let selectData = e.target.value; //Obtenemos el valor que tiene el target del select
            setFilter(selectData); //Guardamos el valor el el estado filter
            let q = `${filterIndex[selectData]}`; //Obtenemos el texto correspondiente del filtro
            getNews(q, "Week") //Obtenemos la respuesta de la petición asincrona
                .then(response => { setResults(response); })
                .catch(error => { console.error("Error al obtener las noticias:", error); });
        } else { //Esto se va a ejecutar cuando presionamos el botón de eliminar filtro
            setFilter("0"); //Vamos a quitar el filtro
            document.querySelector('#filter option[value="0"]').selected = true; //Ponemos el valor del select en el valor por defecto

            getNews() //Como ya no queremos tener el filtro hacemos otra petición AJAX a la API pero ahora sin filtros
                .then(response => { setResults(response); })
                .catch(error => { console.error("Error al obtener las noticias:", error); });
        }
    }

    return (
        <>
            {/*Encabezado de el cuerpo de la pagina (En este apartado estan los titulos y los filtros de la petición)*/}
            <section className="news-header p-2">
                <div className="news-nav d-flex align-items-center justify-content-between">
                    {/*Titulo del cuerpo y botón para mostrar el formulario de filtro*/}
                    <h2 className="p-0 m-0">Últimas noticias</h2>
                    <button className="container-image-filter" onClick={handleShowFilter}>
                        <img src={imgEdit} alt="Filtrar" className="img-filter" />
                    </button>

                </div>

                {/*Formulario para filtrar las noticias (Solo aparece cuando damos click en el boton para filtrar) */}
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

            {/*div para mostrar los filtros actuales de las noticias (Solo aparece si hay un filtro activo)*/}
            {(filter !== "0") && (
                <div className="filters">
                    <p className="filter">
                        Filtrado por <span className='text-decoration-underline' id='filter-name'>{filterIndex[filter]}</span>
                        <button className='btn btn-danger p-1 ms-2 btn-delete' onClick={(e) => handleSetFilter(e, true)}>Eliminar</button>
                    </p>
                </div>
            )}

            {/*Inicio de las noticias*/}
            <section className="content row">

                {
                    sliceResults.map((news, localIndex) => (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-2 px-3 py-1" key={localIndex}>
                            <div className='card shadow-sm h-100'>

                                {/*Intentamos obtener la imagen, en caso de que no esté disponible agregamos una imagen por defecto*/}
                                {(news.image && news.image.thumbnail) ? (
                                    <img src={news.image.thumbnail.contentUrl} className="card-img-top" alt="" />
                                ) : (
                                    <img src="https://placehold.co/100?text=Error+404\nImage+not+available" className="card-img-top" alt="" />
                                )}

                                <div className="card-body d-grid">
                                    <h5 className="card-title">{news.name}</h5>
                                    <p className="card-text">
                                        {news.description}
                                    </p>
                                    <p className="card-date">
                                        {formatDate(news.datePublished)}
                                    </p>
                                    <div className="buttons position-relative bottom-0 d-grid align-items-end">
                                        {/* Declaramos un botón que va a mostrar la noticia completa cuando se presione  */}
                                        <button
                                            className="w-100 btn btn-secondary"
                                            onClick={
                                                (e) => {
                                                    setNewsActive(news);
                                                    setShow(true);
                                                    toggleScroll();
                                                }
                                            }
                                        >
                                            Ver noticia
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>)
                    )
                }

                <nav className='d-flex justify-content-center mt-3'>
                    <ul className="pagination mx-auto">
                        <li className="page-item" onClick={() => { setIndex(0); scrollToTop(); }}><p className="page-link" >1</p></li>
                        <li className="page-item" onClick={() => { setIndex(1); scrollToTop(); }}><p className="page-link">2</p></li>
                        <li className="page-item" onClick={() => { setIndex(2); scrollToTop(); }}><p className="page-link">3</p></li>
                        <li className="page-item" onClick={() => { setIndex(3); scrollToTop(); }}><p className="page-link">4</p></li>
                        <li className="page-item" onClick={() => { setIndex(4); scrollToTop(); }}><p className="page-link">5</p></li>
                    </ul>
                </nav>

            </section>

            {/* En caso de que show sea true vamos a mostrar la noticia en pantalla comleta */}
            {show ? (
                <div id='news-container'>
                    <div className='border border-dark rounded' id="show-news">
                        {(newsActive.image && newsActive.image.thumbnail) ? (
                            <img src={newsActive.image.thumbnail.contentUrl} className="card-img-top" alt="" />
                        ) : (
                            <img src="https://placehold.co/100?text=Error+404\nImage+not+available" className="card-img-top" alt="" />
                        )}
                        <h3>{newsActive.name}</h3>
                        <p id='date'>{formatDate(newsActive.datePublished)}</p>
                        <p id='desc'>{newsActive.description}</p>
                        <a href={newsActive.url} className=''> Ver la noticia completa</a>
                        <button 
                            className='btn btn-secondary mt-2 p-1' 
                            onClick={
                                ()=>{
                                    setShow(false);
                                    toggleScroll();
                                }
                            }
                        >
                            Cerrar
                        </button>
                    </div>

                </div>
            ) : <div></div>}
        </>
    )
}
