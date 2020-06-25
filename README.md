\$ npm i -s express

<!-- --------------------------------------------->

index.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send("hello world");
});
app.listen(5000);

<!-- --------------------------------------------->

\$ npm i -s mongoose

<!-- --------------------------------------------->

db.js

const mongoose = require("mongoose");

// connection to DB Config
const dbConfig = "mongodb://localhost:27017";
const dbName = "MernDB";

mongoose
.connect(`$(dbConfig)/$(dbName)`, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err));

<!-- --------------------------------------------->

$ npm i -s body-parser
$ npm i -s cookie-parser
