const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes")
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch( error => console.error(error));

app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);
app.listen(4000, () => console.log("Server started on port 4000"));