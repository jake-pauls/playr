import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import playtestRoutes from './routes/playtest';
import userRoutes from './routes/user';

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test Endpoint
app.route('/api/ping').get((_req: Request, _res: Response) => {
  _res.status(200).send({ ping: 'pong' });
});

// User/Playtest Routes
app.use('/api', userRoutes);
app.use('/api', playtestRoutes);

export default app;
