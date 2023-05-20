const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.listen(PORT, () => {
    console.log("Backend server running on port " + PORT)
})
