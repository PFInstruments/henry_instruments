import React from "react";

export default function Contact() {
  return (
    <div className="container m">
      <h1 className="display-5 text-muted">Contacto</h1>

      <div class="row text-center align-items-center">
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title text-muted">HENRY MUSIC S.A.</h5>
              <p class="card-text text-muted">Avenida Libertador 2</p>
              <p class="card-text text-muted">CP 1400 - CABA - Argentina</p>
              <p class="card-text text-muted">Telefono: (0296)4545-4545</p>
              <p class="card-text text-muted">mail: contacto@henrymusic.com</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <form>
            <div class="mb-2">
              <label for="txtEmail" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="txtEmail"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                No compartimos los datos con nadie.
              </div>
            </div>
            <div class="mb-2">
              <label for="txtComment" class="form-label">
                Comentario
              </label>
              <textarea
                class="form-control"
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
