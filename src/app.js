import express from 'express';
import morgan from 'morgan';

const app = express();

// Settings 
app.set("port", 3000);


// Puerto


// Middleware
app.use(morgan("dev"));

// Para que el programa use JSON
app.use(json());


export default app;