const express = require("express");
const app = express();

// Mongoose below
const mongoose = require("mongoose");

const questions = require("./routes/api/questions");
const db = require("./config/keys").mongoURI;
app.use(express.json());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo!!"))
  .catch((err) => console.log(err));

app.use("api/questions", questions);

app.get("/", (req, res) => res.send("Hello! Hola!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`));
