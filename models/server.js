import express, { json } from 'express';
import dbConnect from '../database/config.js';
import camara from '../routes/camaraRoute.js';
import impresora from '../routes/impresoraRoute.js';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.listen()
        this.dbConecction()
        this.pathCamara = '/camara'
        this.pathImpresora = '/impresora'
        this.route()
    }

    async dbConecction() {
        await dbConnect()
    }

    route() {
        this.app.use(json());
        this.app.use( cors() );
        this.app.use(this.pathCamara, camara)
        this.app.use(this.pathImpresora, impresora)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running');
        })
    }
}

export default Server