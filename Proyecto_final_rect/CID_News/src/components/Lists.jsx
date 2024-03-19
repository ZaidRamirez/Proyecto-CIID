import React from 'react'

export const Lists = () => {
  return (
    <>
    {/*Titulo de la sección y apartado de filtro*/}
            <section className="news-header p-2">
                <div className="news-nav d-flex align-items-center justify-content-center">
                    <h2 className="p-0 m-0">Mis listas</h2>
                </div>
            </section>

            <hr className="my-1" />

            {/*Inicio de las noticias*/}
            <section className="content">

                <div className="card my-2 shadow-sm">
                    <div className="card-img-top d-flex flex-wrap overflow-hidden">
                        <img src="https://picsum.photos/1000" className="w-50 m-0 p-0 border border-white" alt="" />
                        <img src="https://picsum.photos/1000" className="w-50 m-0 p-0 border border-white" alt="" />
                        <img src="https://picsum.photos/1000" className="w-50 m-0 p-0 border border-white" alt="" />
                        <img src="https://picsum.photos/1000" className="w-50 m-0 p-0 border border-white" alt="" />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Nombre lista</h5>
                        <a href="#" className="btn btn-secondary">Ver lista</a>
                        <a href="#" className="btn btn-outline-secondary mt-1">Agregar noticias</a>

                    </div>
                </div>
            </section>
    </>
  )
}
