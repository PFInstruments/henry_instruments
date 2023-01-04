const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { ACCESS_TOKEN } = process.env;

//SDK mercadopago
const mercadopago = require("mercadopago");

//middleware
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false })); // Esto sirve para poder tomar la respuesta de mercadopago

//Agregar credenciales
mercadopago.configure({
  access_token: { ACCESS_TOKEN }, //Aca va el acces token del dueño del store
});

//routes checkout
router.post("/", (req, res) => {
  const cart = req.body;
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: cart.name,
        unit_price: parseInt(cart.price),
        quantity: parseInt(cart.quantity),
        currency_id: "ARG",
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
