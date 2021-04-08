const express = require("express");
const app = express();

// Mongoose below
const mongoose = require("mongoose");

app.get("/", (req, res) => res.send("Hello! Hola!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`));
