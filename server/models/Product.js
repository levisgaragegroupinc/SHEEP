const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Float,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
