import React from "react";

export default function About() {
  return (
    <div className="container bg-grey x-10 ">
      <div className="row">
        <h1 className="display-5 text-muted justify-content-center mt-5 ml-10 mx-10">
          About us
        </h1>
        <p className="text-justify text-muted mt-5">
          We are a company focused on electronic commerce and the sale of
          products online. Our goal is to reach the largest number of
          possible customers, offering them a simple and practical solution.
        </p>

        <div className="row align-items-center text-center">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-muted">MISSION</h5>
                <p className="card-text text-muted">
                  Satisfy with excellence the musicians, professionals or
                  amateurs, the country and the world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-muted">VISION</h5>
                <p className="card-text text-muted">
                  To be the leader in both service and variety of
                  musical products that generate economic, social and
                  sustainable environment, managing business models
                  innovators and winners, with the best collaborators in the
                  world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-muted">VALUES</h5>
                <p className="card-text text-muted">
                  Honesty, transparency, respect. They are the key to guide
                  our conduct day by day. And they express who we are and in
                  what do we believe.
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
