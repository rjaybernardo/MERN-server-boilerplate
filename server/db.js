const mongoose = require("mongoose");
// const config = require("./config/key");

// connection to DB Config
// const dbConfig = "mongodb://localhost:27017";
// const dbName = "MernDB";

// Connect thru MongoDB Atlas
// const connect = mongoose
//   .connect(config.mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));

// Conect thru MongoDB Compass
mongoose
  .connect("mongodb://localhost:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
