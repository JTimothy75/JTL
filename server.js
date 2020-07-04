const dotenv = require('dotenv');
const mongoose = require('mongoose');
const chalk = require('chalk');

// process.on()

dotenv.config({ path: './config.env' });
const app = require('./app');

const dbURL = process.env.DATABASE;
const port = process.env.PORT || 4100;

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log(`DB connection ${chalk.green('Successful')}`));

const server = app.listen(port, () => {
  console.log(`Listening on port ${chalk.green(port)}`);
});
// console.log(process.env.NODE_ENV);

// let v = 'Love';
// console.log(v);

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
