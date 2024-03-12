import express from "express";
import cros from 'cors'
import routes from './routes/index.mjs'
import db from './config/db.mjs'
import {PORT} from './config/enviroment.mjs'

const app = express();

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

app.listen(PORT, function () {
    console.log("Server is ready to use");
});
app.use(cros())
app.use(express.json())
//GET, POST, PUT, DELETE
app.use('/', routes)

