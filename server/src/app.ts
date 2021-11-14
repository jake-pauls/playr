import express, { Express, Request, Response } from 'express';
import playtestRoutes from './routes/playtest';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test Endpoint
app.route('/ping').get((_req: Request, _res: Response) => {
  _res.status(200).send({ ping: 'pong' });
});

// Playtest Routes
app.use('/api', playtestRoutes);

export default app;
