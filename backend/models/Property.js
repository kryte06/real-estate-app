const PropertySchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  tags: [String],
});

module.exports = mongoose.model("Property", PropertySchema);
