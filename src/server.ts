import express from 'express';
import cors from 'cors';
import { router } from './routes';

import swaggerFile from './swagger.json';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router)

app.listen(3333, () => console.log("Server is running!"));
