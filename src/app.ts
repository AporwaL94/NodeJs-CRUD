import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger-output.json';


// Import all routes from routes/index.ts
import { blogRoutes, authRoutes } from './routes';

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Use the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Define a simple route (Home)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Use blog and auth routes
app.use('/api', blogRoutes);
app.use('/api',authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});