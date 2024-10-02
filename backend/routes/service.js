const express = require("express");
const multer = require("multer");
const path = require("path");
const { Service } = require("../models/Service");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use path.join to construct the relative path
    const destinationPath = path.join(
      __dirname,
      "../../frontend/public/uploads/"
    );
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

/**
 * @desc Get All Services
 * @route /api/service
 * @method GET
 * @access public
 */

router.get("/", async (req, res) => {
  try {
    const services = await Service.find().populate("user", [
      "_id",
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "city",
      "tags",
      "bio",
      "avatar",
      "facebook",
      "instagram",
      "linkedin",
      "category",
    ]);
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc Get Service By His Id
 * @route /api/service/:id
 * @method GET
 * @access public
 */

router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate("user", [
      "_id",
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "city",
      "tags",
      "bio",
      "avatar",
      "facebook",
      "instagram",
      "linkedin",
      "category",
    ]);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
/**
 * @desc Create a new service
 * @route /api/service
 * @method POST
 * @access public
 */

router.post("/", upload.array("images", 4), async (req, res) => {
  try {
    const imagePaths = req.files.map((file) => file.path);
    const service = new Service({
      user: req.body.user,
      title: req.body.title,
      images: imagePaths,
      description: req.body.description,
    });
    const result = await service.save();
    if (result) {
      res.status(201).json({ message: "Service saved successfully", service });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
});

/**
 * @desc Edit Service From His Id
 * @route /api/service/:id
 * @method PUT
 * @access public
 */

router.put("/:id", upload.array("images", 4), async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          user: req.body.user,
          title: req.body.title,
          // images: req.files.map((file) => file.name),
          description: req.body.description,
        },
      },
      { new: true }
    );

    if (service) {
      res.status(200).json({ message: "Service updated successfully" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

/**
 * @desc Delete Service From His Id
 * @route /api/service/:id
 * @method DELETE
 * @access public
 */
router.delete("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      await Service.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ message: "Service Has Been Deleted successfully" });
    } else {
      res.status(404).json({ message: "Service Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});
module.exports = router;
