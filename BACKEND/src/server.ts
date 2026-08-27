import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";
import {errorhandler} from './middleware/errorMiddleware'
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});
app.use(errorhandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});