const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('uncaughtException', err => {
  console.log(err.name, err.message, err.stack);
  console.log('UNCAUGHT EXCEPTION!!! Shutting down...')
  process.exit(1);

});







const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}...`);
});

process.on('unhandledRejection', err => {

  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION!!! Shutting down...')
  server.close(() => {
    process.exit(1);


  });
})

// process.on('SIGTERM', () => {
//   console.log('SIGTERM received. Shutting down gracefully.');
//   server.close(() => {
//     // We will not use the process.exit because the SIGTERM will do this for us!
//     console.log('Process termineted!')
//   })
// })



// SexMachine
