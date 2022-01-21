const express = require("express");
const router = express.Router();

const vehiclepart = require("../models/vehicle-part");

// vehicle part retrive
router.get("/vehicle-part", (req, res, next) => {
  vehiclepart.find(function (err, vehiclepart) {
    res.json(vehiclepart);
  });
});

// add
router.post("/vehicle-part", (req, res, next) => {
  let newvehiclepart = new vehiclepart({
    partID: req.body.partID,
    partName: req.body.partName,
    brandName: req.body.brandName,
    price: req.body.price,
    shelveNumber: req.body.shelveNumber,
    availableQty: req.body.availableQty,
    purchaseDate: req.body.purchaseDate,
  });
  newvehiclepart.save((err, _vehiclepart) => {
    if (err) {
      res.json({ msg: "Failed to connect", error: err });
    } else {
      res.json({ msg: "vehiclepart added successfully" });
    }
  });
});

module.exports = router;
