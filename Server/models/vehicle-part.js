const mongoose = require("mongoose");

const VehiclepartSchema = mongoose.Schema({
  partID: {
    type: String,
    required: true,
  },
  partName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  shelveNumber: {
    type: Number,
    required: true,
  },
  availableQty: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
});

const Vehiclepart = (module.exports = mongoose.model(
  "Vehiclepart",
  VehiclepartSchema
));
