const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home');

const PORT = config.get('port') || 3000;
const MONGODB_URI = config.get('mongodb_uri');

const app = express();

app.use('/', homeRoutes);

(async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
