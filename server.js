const dotenv = require("dotenv");
const mongoose = require("mongoose");
const chalk = require("chalk");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const dbURL = process.env.DATABASE;
const port = process.env.PORT || 4100;

// mongoose
//   .connect(dbURL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log(`DB connection ${chalk.green("Successful")}`));

app.listen(port, () => {
  console.log(`Listening on port ${chalk.green(port)}`);
});
