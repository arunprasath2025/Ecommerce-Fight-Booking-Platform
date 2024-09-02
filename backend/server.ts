require('dotenv').config({ path: '.environment/.dev.env' });

const express = require("express");

const http = require("http");

import { router as flightroute } from './src/routes/flightroutes';
import { router as userroute } from './src/routes/userroutes';
import { router as passengerroute } from './src/routes/passengerroutes';
import { router as bookingroute } from './src/routes/bookingroutes';
import { router as mailrout } from './src/routes/mailroute';
import { router as paymentroute } from './src/routes/paymentroutes';

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));





app.use(express.json({ limit: '100mb' }));

app.use('/flight', flightroute);
app.use('/user', userroute);
app.use('/passenger', passengerroute);
app.use('/booking', bookingroute);
app.use('/sendmail', mailrout);
app.use('/payment',paymentroute);
const port = process.env.PORT || 80
http
  .createServer(app)
  .listen(port, () =>
    console.log(`Server is running on port ${port}`)
  );
