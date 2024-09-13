const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config()


const app = express();
const port = 4500;

const Flight = require('./models/formSchema')
const formRoutes = require("./routes/formRoutes");


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });


app.use("/", formRoutes);

app.get("/", (req, res) => {
  res.send("hello got to 'http://localhost:4500/form' to enter data");
});

app.get('*',(req,res)=>{
    res.send('PAGE NOT FOUND')
})

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
