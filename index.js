const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors');
require('dotenv').config();

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
console.log(`Server started on port successfully! Cloud Notebook backend listening at http://localhost:${port}`);
})