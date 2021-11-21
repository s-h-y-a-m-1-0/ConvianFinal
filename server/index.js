const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());

const url =
  "mongodb+srv://shyam_10:12345@cluster0.wamju.mongodb.net/convian?retryWrites=true&w=majority";
const client = new MongoClient(url);

const connectToDb = async () => {
  await client
    .connect()
    .then(() => console.log("Connected successfully to server"));
};

connectToDb();

app.post("/login", async (req, res) => {
  const db = client.db("convian");
  await client
    .connect()
    .then(() => console.log("Connected successfully to server"));
  const collection = db.collection("users");
  const data = await collection.findOne({
    uniqueid: req.body.srn,
    password: req.body.password,
  });

  res.json(data);
});

app.listen(9000, () => console.log("Server Running at port 9000"));
