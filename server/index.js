require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/register");
const authRoutes = require("./routes/login");

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8080;


// database connection and Listening Port

  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => app.listen(port, console.log(`Listening on port ${port}...`)))
    .catch((error) => console.log(error, "Could not connect database!"));



// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

