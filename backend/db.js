const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://jainshorya11:39IbITTxlTgIua32@cluster0.wu44hfk.mongodb.net/swiggyMERN"; // Include the database name

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Fetch and log the data from the "food_items" collection
    const fetchedData = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    // console.log(fetchedData);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
