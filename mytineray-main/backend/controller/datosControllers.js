const Cities = require("../models/cities.js");
const Itinerary = require("../models/itinerary.js");

const datosController = {
  // datosController
  ObtenerTodosLosDatos: async (req, res) => {
    // recibe una peticion y en relacion a esta da una respuesta

    let cities;
    let error = null;

    try {
      cities = await Cities.find(); // declaramos primero como funcion asicrona y luego esperamos una respuesta para no esperarla vacia
    } catch (err) {
      error = err;
      console.log(error);
    }

    res.json({
      // armamos operadores ternarios
      response: error ? "ERROR" : { cities },
      success: error ? false : true,
      error: error,
    });
  },

  ObtenerItynerarios: async (req, res) => {
    const city = req.params.city;
    console.log(req.params.city);

    let itinerary;
    let error = null;
    try {
      itinerary = await Itinerary.find({ city: city });

      //
    } catch (err) {
      error = err;
    }

    res.json({
      response: error ? "ERROR" : { itinerary },
      success: error ? false : true,
      error: error,
    });
  },

  // likeDislike: async (req, res) => {
  //   const id = req.params.id;
  //   const user =req.user.id;

  //   console.log(id);
  //   console.log(user);
  //   let itinerary
  //   try {
  //     itinerary = await Itinerary.findOne({_id:id});
  //     if (itinerary.Like.includes(user)) {
  //       Itinerary.findOneAndUpdate(
  //         {_id:id},
  //         {$pull:{Like:user} },
  //         {new:true}
  //       )
  //         .then((response) =>
  //           res.json({ success: true, mensaje: mensaje.Like })
  //         )

  //         .catch((error) => console.log(error));
  //     } else {
  //       Itinerary.findOneAndUpdate(
  //         {_id:id},
  //         { $push: {Like:user} },
  //         { new: true }
  //       )
  //         .then((response) =>
  //           res.json({ success: true, mensaje: mensaje.Like })
  //         )

  //         .catch((error) => console.log(error));
  //     }
  //     //
  //   } catch (err) {
  //     error = err;
  //     res.json({ success: false, response: error });
  //   }
  // },
};

module.exports = datosController;
