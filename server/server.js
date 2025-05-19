import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(cors({
    origin: [
      "https://imagify-3-19xs.onrender.com",
      "http://localhost:5173" 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

await connectDB(); 

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);
app.get('/', (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));