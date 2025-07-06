const express = require("express");
require("dotenv").config();

const cors = require('cors');
const bussinessRoutes = require("./Router/businessRoutes");


const app=express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://growthai-assessment1frontend.vercel.app/'],
  credentials: true
}));


app.use(express.json());

app.use("/",bussinessRoutes);

const PORT=process.env.PORT||30000;

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});