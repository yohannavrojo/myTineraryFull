require("dotenv").config()

const express = require("express")  //equivalente al import de Reac, pero en Node
const cors = require("cors")
const Router = require("./routes/routes")
const passport=require("passport")
const app = express()
require("./config/database")

const path =require('path')
const PORT=process.env.PORT || 4000
const HOST=process.env.HOST || '0.0.0.0'


//midlewers
app.use(express.json()) //tramo intermedio que pasa los datos a una variable
app.use(cors())
app.use(passport.initialize())
app.use("/api",Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })
}

app.listen(PORT,HOST,()=>console.log("Servidor inicializado en puerto 4000"))