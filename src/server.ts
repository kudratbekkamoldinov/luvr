import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    console.log("MongoDb connection succeed");
    const PORT = process.env.PORT ?? 3003;
}).catch((err) => console.log("ERROR on connection MongoDB", err));