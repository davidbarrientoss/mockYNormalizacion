const faker = require("faker")
const express = require("express")

let router = express.Router()


faker.locale = "es";

let carritos = [];

for (let i = 0; i < 5; i++) {
  carritos.push(
        {
          id: `${i}`,
          nombre: `${faker.commerce.productName()}`,
          precio: `${faker.commerce.price(2, 1000, 2, "€")}`,
          foto: `${faker.image.business(200, 600, true)}`,
        },

)}

let idCarritos = carritos.map(a => a.id)
let nombreCarritos = carritos.map(a => a.nombre)
let precioCarritos = carritos.map(a => a.precio)
let fotoCarritos = carritos.map( a => a.foto)

router.get("/", (req, res) => {


  res.render("productsTable",{idCarritos:idCarritos , nombreCarritos:nombreCarritos , precioCarritos:precioCarritos , fotoCarritos:fotoCarritos})
});

module.exports = router
