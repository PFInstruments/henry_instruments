const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// Importa el ACCESS_TOKEN de las variables de entorno
const { ACCESS_TOKEN } = process.env;

// Importa la SDK de MercadoPago
const mercadopago = require("mercadopago");

// Configura la SDK de MercadoPago con el ACCESS_TOKEN
mercadopago.configure({
  access_token: ACCESS_TOKEN, // Debe utilizar el ACCESS_TOKEN sin las llaves {}
});

console.log("ACCESS_TOKEN:", ACCESS_TOKEN);

// Establece un middleware para parsear el cuerpo de la solicitud como una URL codificada
router.use(bodyParser.urlencoded({ extended: false }));

// Establece una ruta POST para crear una preferencia de pago
router.post("/", (req, res) => {
  // Obtiene la información del carrito de compras del cuerpo de la solicitud
  const cart = req.body;

  // Crea un objeto de preferencia con la información del carrito
  let preference = {
    items: [
      {
        title: cart.name,
        unit_price: parseInt(cart.price), // Convierte el precio a un entero
        quantity: cart.quantity,
        currency_id: "ARG",
      },
    ],
    back_urls: {
      success: "/home",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  console.log("Preferencia:", preference);

  // Crea la preferencia de pago utilizando la SDK de MercadoPago
  mercadopago.preferences
    .create(preference)
    .then((response) => {
      console.log("Respuesta de MercadoPago:", response);
      res.status(200).send({ response });
    })
    .catch((e) => {
      console.log("Error:", e);
      res.status(404).send(e);
    });
});

// Exporta la ruta para uso en la aplicación
module.exports = router;