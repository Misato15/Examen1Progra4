const express = require('express');
const evento = require('../evento');


class Server{
    constructor (){
        this.app=express()
        this.routes();     
    }
    routes(){
       this.app.use('/', require('../routes/evento'))
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>
            console.log("El servidor esta corriendo" + process.env.PORT))
    }
}

module.exports = Server