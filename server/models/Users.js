const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // set to total dollars donated from all user orders
    dollarsDonated: Number,
    // set funded to be an array of data that adheres to the projectSchema
    projectsFunded: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Add a virtual that goes through the orders and sums the total amount donated
userSchema
  .virtual("allDollarsDonated", {
    ref: "Order",
    localField: "product._id",
    foreignField: "product",
  })
  .get(function () {
    console.log("orders", this.orders);

    let donation = 0;
    this.orders.map((order) => {
      console.log("order", order);
      let dollarAmount = order.product.price;
      donation += dollarAmount;
      console.log("donation", donation);
    });
    if (donation === NaN) {
      return 0;
    }
    return donation;
  });

const User = model("User", userSchema);

module.exports = User;
