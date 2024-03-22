import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
import DBConnection from './DB/db';
import auth from './Routers/auth/auth';
import cors from 'cors';
// config
dotenv.config(); // configuring .env file

// constants
const app = express();
const PORT = process.env.PORT || 5000;
const DB: string | undefined = process.env.DB || "error";
export const SECRET_TOKEN: string | undefined = process.env.USER_SECRET;

DBConnection(DB);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Use built-in express.urlencoded middleware   
app.use('/auth',auth);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    staus:200,
    message:"server Found!"
  })
});


app.listen(PORT, () => {
  
  
  console.log(`Server is running on http://localhost:${PORT}`);
});
