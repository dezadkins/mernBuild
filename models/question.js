const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    require: true,
  },
  repo: {
    type: String,
  },
  live: {
    type: String,
  },
  answered: {
    type: Boolean,
    default: false,
  },
});
