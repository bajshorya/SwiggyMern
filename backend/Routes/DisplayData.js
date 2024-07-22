const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.json({
      food_items: global.food_items,
      foodCategory: global.foodCategory,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
