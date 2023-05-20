const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();

const studentRoutes = require("./routes/ProfileRoute");

try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
} catch (err){
    console.log(err);
}

app.use(cors());
app.use(express.json());

app.use("/api/student", studentRoutes);

app.listen(PORT, () => {
    console.log("Backend server running on port " + PORT)
})
