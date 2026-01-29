import express from 'express';
import dotenv from 'dotenv';
import todoRouter from './controllers/index.js';
import './utils/dbconnect.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get('/', (req, res) => {
    try {
        res.status(200).send('API is running...');
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.use('/api', todoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});