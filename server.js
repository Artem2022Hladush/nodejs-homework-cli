const app = require('./app');
const mongoose = require("mongoose");
const {DB_HOST} = process.env;
const {PORT = 3000} = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful")
  })
  .catch(error => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1)
  })
