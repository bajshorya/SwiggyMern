const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://jainshorya11:39IbITTxlTgIua32@cluster0.wu44hfk.mongodb.net/swiggyMERN";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();
    // console.log("Fetched food items:", fetchedData); // Add this line
    // console.log("Fetched food categories:", foodCategory); // Add this line

    global.food_items = fetchedData;
    global.foodCategory = foodCategory;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
