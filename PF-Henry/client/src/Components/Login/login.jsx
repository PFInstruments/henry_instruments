import React from "react";

const Login=()=>{
    return(
        <div className="container mt-3">
            <h3>Form Validation</h3>
            <p>Try to submit the form.</p>
            <form className="was-validated">
                <div className="mb-3 mt-3">
                    <label for="uname" className="form-label">Username:</label>
                    <input type="text" className="form-control" placeholder="introduzca correo" required/>
                    <div className="valid-feedback">Valido.</div>
                    <div className="invalid-feedback">Correo invalido.</div>
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" placeholder="introduzca contrasena"  required/>
                    <div className="valid-feedback">Valido.</div>
                    <div className="invalid-feedback">contrasena invalida.</div>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" required/>
                    <label className="form-check-label" for="myCheck">I agree on blabla.</label>
                    <div className="valid-feedback">Aceptas los terminos y condiciones.</div>
                    <div className="invalid-feedback">Debe aceptar los terminos y condiciones.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br />
            <br />
        </div>
    )
}

export default Login;