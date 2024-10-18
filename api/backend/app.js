//importing modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Post = require("./post");

//initializing express server
const app = express();

//connecting to database
const DB_CONNECTION =
  "mongodb://admin:zKrTFqwnKftD8DN@cluster0-shard-00-00.stgq9.mongodb.net:27017,cluster0-shard-00-01.stgq9.mongodb.net:27017,cluster0-shard-00-02.stgq9.mongodb.net:27017/?ssl=true&replicaSet=atlas-13gqy5-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.warn(err));

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//making routes
app.get("/", (req, res) => {
  Post.find({})
    .then((data) => {
      return res.json({
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        error: err,
      });
    });
});

app.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((data) => {
      return res.json({
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        error: err,
      });
    });
});

app.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      return res.json({
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        error: err,
      });
    });
});

app.put("/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
  })
    .then((data) => {
      return res.json({
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        error: err,
      });
    });
});

app.delete("/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((data) => {
      return res.json({
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        error: err,
      });
    });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});


// fetch("http://localhost:5000/sds", {
//     method:"PUT",
//     body:JSON.stringify({
//         title:"",
//         description:""
//     })
// })