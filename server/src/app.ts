import express, { Express, Request, Response } from 'express';
import playtestRoutes from './routes/playtest';
import userRoutes from './routes/user';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test Endpoint
app.route('/ping').get((_req: Request, _res: Response) => {
  _res.status(200).send({ ping: 'pong' });
});

// User/Playtest Routes
app.use('/api', userRoutes);
app.use('/api', playtestRoutes);

export default app;
