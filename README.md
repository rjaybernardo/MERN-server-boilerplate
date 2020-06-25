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

db.js

mongoose
.connect("mongodb://localhost:27017/Test", {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
})

<!-- --------------------------------------------->

\$ npm install nodemon --save-dev

<!-- --------------------------------------------->

package.json

"scripts": {
"start": "node server/index.js",
"backend": "nodemon server/index.js",
"frontend": "npm run front --prefix client",
"dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""

<!-- --------------------------------------------->

Hash Password

models/User.js

const bcrypt = require("bcrypt");
const saltRounds = 10;

userSchema.pre("save", function (next) {
var user = this;

if (user.isModified("password")) {
console.log("password changed");
bcrypt.genSalt(saltRounds, function (err, salt) {
if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });

} else {
next();
}
});

\$npm i -s bcrypt

<!-- --------------------------------------------->

\$ npm i -s jsonwebtoken

<!-- --------------------------------------------->
