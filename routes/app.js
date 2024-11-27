const express = require("express");
const Model = require("../model");
const router = express.Router();

router.post("/movie", async (req, res) => {
  const data = new Model({
    // title: "leo",
    // year: "2024-",
    // runTime: "2.5hrs",
    // genere: "Normal",

    // language: "TAmil",
    // posterimage:
    //   "https://www.hindustantimes.com/ht-img/img/2023/09/21/550x309/leo_hindi_poster_1695300852318_1695300852589.jpeg",
    // imbdbID: "True",

    title: req.body.title,
    year: req.body.year,
    runTime: req.body.runTime,
    language: req.body.language,

    language: req.body.language,
    posterimage: req.body.posterimage,

    imbdbID: req.body.imbdbID,
  });
  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/movies", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data); //status code is missing
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/movie/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/movie/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndDelete(req.params.id);
    res.status(200).send("data sucesfully deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
