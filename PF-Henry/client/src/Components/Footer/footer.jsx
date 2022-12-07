import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm bg-primary text-white">
          <img src="" alt="img not found" />
        </div>
        <div className="col-sm bg-dark text-white">Contacto</div>
        <div className="col-sm bg-primary text-white">Redes sociales</div>
        <div className="col-sm bg-dark text-white">Direccion</div>
      </div>
    </div>
  );
}
