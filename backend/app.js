import express, { urlencoded } from 'express'
import dotenv from 'dotenv';
import { DBConnection } from "./Connection/DBConnection.js";
import authRoute from './Routers/AuthRouter.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
DBConnection();

app.use(express.json())
app.use('/api/auth', authRoute)

app.get('/',(req, res)=> {
   res.cookie('name', 'shiva').send("Hello");
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT} `);
});