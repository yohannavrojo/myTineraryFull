const Router = require("express").Router();
const datosController = require("../controller/datosControllers");// revisar esta ruta 
const { accesoUsuario } = require("../controller/usersControllers.js");
const {ObtenerTodosLosDatos, ObtenerItynerarios} = datosController // desestructuración del controlador de Ciudades
const usersController= require ("../controller/usersControllers.js")
const {nuevoUsuario, verifyEmail,accesoUsuario} = usersController
const validator= require("../controller/validator.js")


Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city") // "datos" parte de la url de la consulta 
.get(ObtenerItynerarios)

Router.route("/signup")
.post(validator,nuevoUsuario)

Router.route("/verify/:uniqueText") // "datos" parte de la url de la consulta 
.get(verifyEmail)

Router.route("/singin") // "datos" parte de la url de la consulta 
.post(accesoUsuario)


module.exports = Router