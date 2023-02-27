const app = require('./app');
const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Artem:TaiAbPxkGXZiGdf7@cluster0.getzcrz.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful")
  })
  .catch(error => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1)
  })
// TaiAbPxkGXZiGdf7 mongoDB pass