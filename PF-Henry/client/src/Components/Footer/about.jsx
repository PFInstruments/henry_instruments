import React from "react";

export default function About() {
  return (
    <div className="container bg-grey x-10 ">
      <div className="row">
        <h1 className="display-5 text-muted justify-content-center mt-5 ml-10 mx-10">
          Sobre nosotros
        </h1>
        <p className="text-justify text-muted mt-5">
          Somos una empresa enfocada en el comercio electrónico y la venta de
          productos en línea. Nuestro objetivo es llegar al mayor número de
          clientes posible, ofreciéndoles una solución sencilla y práctica.
        </p>

        <div className="row align-items-center text-center">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-muted">MISION</h5>
                <p className="card-text text-muted">
                  Satisfacer con excelencia a los músicos, profesionales o
                  amateurs, del pais y del mundo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-muted">VISION</h5>
                <p className="card-text text-muted">
                  Ser el líder en tanto en servicio como en variedad de
                  productos musicales, que genere valor económico, social y
                  ambiental sostenible, gestionando modelos de negocio
                  innovadores y ganadores, con los mejores colaboradores en el
                  mundo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-muted">VALORES</h5>
                <p className="card-text text-muted">
                  Honestidad, transparencia, respeto. Son la clave para guiar
                  nuestra conducta día con día. Y expresan quiénes somos y en
                  qué creemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
        <p className="text-justify text-muted mt-2">MISION</p>
        <p className="text-justify text-muted mt-2">
          Satisfacer con excelencia a los músicos, profesionales o amateurs, del
          pais y del mundo.
        </p>

        <p className="text-justify text-muted mt-2">VISION</p>
        <p className="text-justify text-muted mt-2">
          Ser el líder en tanto en servicio como en variedad de productos
          musicales, que genere valor económico, social y ambiental sostenible,
          gestionando modelos de negocio innovadores y ganadores, con los
          mejores colaboradores en el mundo.
        </p>
        <p className="text-justify text-muted mt-2">VALORES</p>
        <p className="text-justify text-muted mt-2">
          Honestidad, transparencia, respeto. Son la clave para guiar nuestra
          conducta día con día. Y expresan quiénes somos y en qué creemos.
        </p>
      </div>
    </div>*/
