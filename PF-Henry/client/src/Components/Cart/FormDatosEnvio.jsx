import React, { useReducer } from "react";
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
    <div className="tw-container tw-p-12 tw-mx-auto">
      <div className="tw-grid tw-grid-cols-2">
        <div class="tw-flex tw-flex-col md:tw-w-full">
          <h2 class="tw-mb-4 tw-font-bold md:tw-text-xl tw-text-heading ">
            Shipping Address
          </h2>
          <form
            onSubmit={handleSubmit}
            className="tw-justify-center tw-w-full tw-mx-auto"
          >
            <div>
              <div className="tw-mt-4">
                <div className="tw-w-full">
                  <label
                    htmlFor="inputName"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                    Nombre Completo:
                  </label>
                  <input
                    placeholder="Your Name"
                    required
                    type="name"
                    name="name"
                    id="inputName"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600 "
                    value={contactForm.name}
                    onChange={(e) => {
                      setContactForm({
                        type: "SET_NAME",
                        payload: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="tw-w-full">
                <div className="tw-w-full">
                  <div className="tw-space-x-0 lg:tw-flex lg:tw-space-x-4">
                    <div class="tw-w-full lg:tw-w-1/2">
                      <label
                        htmlFor="inputCity"
                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                      >
                        Pais:
                      </label>
                      <input
                        placeholder="Country"
                        type="text"
                        className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
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
                    <div className="tw-w-full lg:tw-w-1/2">
                      <label
                        htmlFor="inputProvince"
                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                      >
                        Provincia:
                      </label>
                      <input
                        placeholder="Province"
                        type="text"
                        className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                        id="inputProvince"
                        value={contactForm.province}
                        onChange={(e) => {
                          setContactForm({
                            type: "SET_PROVINCE",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="tw-mt-4">
                    <div className="tw-w-full">
                      <label
                        htmlFor="inputAddress"
                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                      >
                        Dirección:
                      </label>
                      <input
                        placeholder="adress"
                        required
                        type="text"
                        name="adress"
                        value={contactForm.adress}
                        className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                        onChange={(e) => {
                          setContactForm({
                            type: "SET_ADDRESS",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tw-space-x-0 lg:tw-flex lg:tw-space-x-4">
                <div class="tw-w-full lg:tw-w-1/2">
                  <label
                    htmlFor="inputCity"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                    Ciudad:
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
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
                <div className="tw-w-full lg:tw-w-1/2">
                  <label
                    htmlFor="inputZip"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                    Cp:
                  </label>
                  <input
                    placeholder="zip"
                    type="text"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
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
              </div>
              <div className="tw-mt-4">
                <div className="tw-w-full">
                  <label
                    htmlFor="inputAddress"
                    className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                  >
                    Numero de Telefono:
                  </label>
                  <input
                    placeholder="phone number"
                    type="text"
                    className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
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
              </div>
              <div className="tw-mt-4">
                <button
                  type="submit"
                  class="tw-w-full tw-px-6 tw-py-2 tw-text-blue-200 tw-bg-blue-600 hover:tw-bg-blue-900 tw-border-none"
                >
                  Process
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="tw-m-5">
        <h2 class="tw-mb-4 tw-font-bold md:tw-text-xl tw-text-heading ">Order Summary </h2>
         <h4>Total Products : {cart.length}</h4>
         <hr/>
         {cart.map((item) => ( 
          <>
          <div className="tw-grid tw-grid-cols-3 tw-m-4 ">
            <div>
            <img src={item.image} alt="" className="tw-w-20 tw-h-20"/>
            </div>
            <div className="tw-m-2" >
              <span>
              Quantity: {item.quantity}  <h5 className="text-xl font-bold">{item.name}</h5>
              </span>
            
            </div>
            <div className="tw-m-2">
              <span>price</span>
            <h6 >${item.price}</h6>
            </div>
          </div>
           <hr />
          </>
         
        ))}
        <h4>Total Price : ${cart.reduce(
          (currentSum, currentCardItem) =>  currentSum + currentCardItem.price * currentCardItem.quantity, 0 ) .toFixed(2)}
        </h4>
        </div>
        </div>
      </div>
   
  );
};

export default FormularioEnvio;

{
  /* <form onSubmit={handleSubmit}>
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
</form> */
}
