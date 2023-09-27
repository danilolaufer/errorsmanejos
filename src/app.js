import express from 'express';
import config from './config/config.js';
import compressionRouter from './routers/compression.router.js'
import usersRouter from './routers/users.router.js'
import compression from 'express-compression';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))
app.use("/compression", compressionRouter);
app.use("/api/users", usersRouter);


const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});