const express = require("express");
const cors = require('cors');
const bussinessRoutes = require("./Router/businessRoutes");


const app=express();
app.use(express.json());

app.use("/",bussinessRoutes);
app.listen(3000, () => {
  console.log(`Backend server is running on http://localhost:3000`);
});