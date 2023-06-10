var mongoose = require("mongoose");

var anouncementsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Anouncements', anouncementsSchema);
