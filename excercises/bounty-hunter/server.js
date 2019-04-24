const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bountyRouter = require("./routes/bountyRoutes");

const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

mongoose.connect(
  "mongodb://localhost:27017/bounties",
  { useNewUrlParser: true },
  () => {
    console.log("connected to DB");
  }
);

app.use("/api/bounties", bountyRouter);

app.use((err, req, res, next) => {
  console.error(err);
  return res.send({ errMsg: err.message });
});

app.listen(port, () => console.log(`The magic happens on port: ${port}`));
