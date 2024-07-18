const express = require("express");
const app = express();
const port = 3000;
const mongoDB = require("./db");

mongoDB(); // Call the function to connect to MongoDB

app.use(express.json());

app.use("/api", require("./Routes/CreateUser"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
