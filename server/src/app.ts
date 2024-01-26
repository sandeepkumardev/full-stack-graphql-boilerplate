import express from 'express';
import middleware from './middleware';

const app = express();
const PORT = 5050;

app.use(middleware)

app.listen(PORT, () => {
    console.log("Server is running!")
})