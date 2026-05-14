import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "./config/openapi";


export const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());


app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Libros');
});

app.use('/api/v1', v1Routes);

app.use(errorMiddleware);

