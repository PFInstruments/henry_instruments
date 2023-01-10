import React, { useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkoutadd } from "../../Redux/actions";

const FormularioEnvio = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    const order = {
      items: cart.map((item) => ({
        id: item.id,
        title: item.name,
        image: item.image,
        unit_price: parseInt(item.price), // Convierte el precio a un entero
        quantity: parseInt(item.quantity),
        currency_id: "ARS",
      })),
    };
    dispatch(checkoutadd(order));
  };

  // Establecer el estado inicial del formulario
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone_number: "",
  //   adress: "",
  //   city: "",
  //   province: "",
  //   country: "",
  //   zip: "",
  // });

  // Método para manejar los cambios en cada campo del formulario
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // Método para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos del formulario a tu servidor o realizar cualquier otra acción
    handleCheckout();
    setContactForm({ type: "SUBMIT" });
  
  };

  let initialState = {
    name: "",
    phone_number: "",
    adress: "",
    city: "",
    province: "",
    country: "",
    zip: "",
  };

  const dataEnvioFormReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "SET_NAME": {
        return {
          ...state,
          name: action.payload,
        };
      }
      case "SET_ADDRESS": {
        return {
          ...state,
          adress: action.payload,
        };
      }
      case "SET_PHONENUM": {
        return {
          ...state,
          phone_number: action.payload,
        };
      }
      case "SET_CITY": {
        return {
          ...state,
          city: action.payload,
        };
      }
      case "SET_STATE": {
        return {
          ...state,
          state: action.payload,
        };
      }
      case "SET_ZIP": {
        return {
          ...state,
          zip: action.payload,
        };
      }
      case "SET_COUNTRY": {
        return {
          ...state,
          country: action.payload,
        };
      }
      case "SET_PROVINCE": {
        return {
          ...state,
          province: action.payload,
        };
      }

      case "SUBMIT": {
        console.log(initialState);
        return {
          ...state,
        };
      }
    }
  };
  const [contactForm, setContactForm] = useReducer(
    dataEnvioFormReducer,
    initialState
  );

  return (
    <div className="position-relative ">
      <form
        onSubmit={handleSubmit}
        className="row g-2 w-25 p-2 position-absolute top-50 start-40 text-bg-dark p-3"
      >
        <div className="col-md-10">
          <label htmlFor="inputName" className="form-label">
            Nombre Completo:
          </label>
          <input
            required
            type="name"
            name="name"
            id="inputName"
            className="form-control "
            value={contactForm.name}
            onChange={(e) => {
              setContactForm({
                type: "SET_NAME",
                payload: e.target.value,
              });
            }}
          />
        </div>
        
        <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                    Dirección:
                    </label>
          <input
            required
            type="text"
            name="adress"
            value={contactForm.adress}
            className="form-control"
            onChange={(e) => {
              setContactForm({
                  type: "SET_ADDRESS",
                  payload: e.target.value,
              });
          }}
          />
        </div>
        <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        Pais:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCountry"
                        value={contactForm.country}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_COUNTRY",
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputProvince" className="form-label">
                        Provincia:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCountry"
                        value={contactForm.country}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_PROVINCE",
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        Ciudad:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        value={contactForm.city}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_CITY",
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                        Codigo Postal:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        value={contactForm.zip}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_ZIP",
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Numero de Telefono:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhoneNumber"
                        value={contactForm.phone_number}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_PHONENUM",
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>
        <button type="submit" className="btn  btn-success btn-lg">Pagar</button>
      </form>
    </div>
  );
};

export default FormularioEnvio;

{/* <form onSubmit={handleSubmit}>
<label>
  Nombre Completo:
  <input
    required
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Dirección:
  <input
    required
    type="text"
    name="adress"
    value={formData.adress}
    onChange={handleChange}
  />
</label>
<br />
<label>
  País:
  <input
    required
    type="text"
    name="country"
    value={formData.country}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Provincia:
  <input
    required
    type="text"
    name="province"
    value={formData.province}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Ciudad:
  <input
    required
    type="text"
    name="city"
    value={formData.city}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Código postal:
  <input
    required
    type="text"
    name="zip"
    value={formData.zip}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Número telefónico:
  <input
    required
    type="text"
    name="phone_number"
    value={formData.phone_number}
    onChange={handleChange}
  />
</label>
<br />
<button type="submit">Pagar</button>
</form> */}