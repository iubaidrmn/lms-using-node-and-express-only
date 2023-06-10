var mongoose = require("mongoose");

var assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
