import React from "react";

export default function Contact() {
  return (
    <div className="container m">
      <h1 className="display-5 text-muted">Contacto</h1>

      <div className="row text-center align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-muted">HENRY MUSIC S.A.</h5>
              <p className="card-text text-muted">Avenida Libertador 2</p>
              <p className="card-text text-muted">CP 1400 - CABA - Argentina</p>
              <p className="card-text text-muted">Telefono: (0296)4545-4545</p>
              <p className="card-text text-muted">mail: contacto@henrymusic.com</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <form>
            <div className="mb-2">
              <label htmlFor="txtEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="txtEmail"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                No compartimos los datos con nadie.
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="txtComment" className="form-label">
                Comentario
              </label>
              <textarea
                className="form-control"
                id="txtComment"
                rows="7"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
