import express from "express";
import routes from './routes/index.mjs'
import db from './config/db.mjs'

const app = express();

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

app.listen(4001, function () {
    console.log("Server is ready to use");
});
app.use(express.json())
//GET, POST, PUT, DELETE
app.use('/', routes)

