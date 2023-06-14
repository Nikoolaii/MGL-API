import express from 'express';
import { config } from 'dotenv';
import roleRoute from './routes/role';
import userRoute from './routes/user';
config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use('/role', roleRoute);
app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
