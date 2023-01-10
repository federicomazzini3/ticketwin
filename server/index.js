import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import competitionsRoutes from './routes/competitions.js'
import userRoutes from './routes/users.js';
import { rescheduleDraw } from './middleware/draw.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//routes
app.use('/competitions', competitionsRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .then(() => rescheduleDraw())
  .catch((error) => console.log(`${error} did not connect`));
