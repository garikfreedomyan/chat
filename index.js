const http = require('http');
const express = require('express');
const socket = require('socket.io');
const mongoose = require('mongoose');
const helmet = require('helmet');
const config = require('config');
const createRoutes = require('./routes/create');
const joinRoutes = require('./routes/join');
const getRoutes = require('./routes/get');
const socketEventsHandler = require('./events');

const PORT = config.get('port') || 3000;
const MONGODB_URI = config.get('mongodb_uri');

const app = express();
const server = http.Server(app);
const io = socket(server);

app.use(
  express.json({
    extended: true,
  })
);
app.use(helmet());
app.use('/create', createRoutes);
app.use('/join', joinRoutes);
app.use('/get', getRoutes);

io.on('connection', socketEventsHandler);

(async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    server.listen(PORT, () => {
      console.log('===============================================================================================');
      console.log(`==========================  Server is running on port: ${PORT}  ==================================`);
      console.log('===============================================================================================');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
