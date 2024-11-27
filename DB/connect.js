// Import the mongoose package
const mongoose = require("mongoose");

// Connection URI (replace <username>, <password>, <cluster-url>, and <database> with your details)
const uri =
  "mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB using Mongoose!");
  })
  .catch((err) => {
    console.error("Connection failed!", err);
  });

// Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
});

// Create a model
const User = mongoose.model("User", userSchema);

// Use the model to interact with the database
User.findOne({}, (err, user) => {
  if (err) {
    console.error("Error finding user:", err);
  } else {
    console.log("User found:", user);
  }
});
