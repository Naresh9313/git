const express = require('express');
const mongoose = require('mongoose');
const allroutes = require('./routes/routes');
require('dotenv').config()

const app = express();

app.use(express.json())


app.use('',allroutes);

mongoose.connect(process.env.MongoDB_URL,{ useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


app.listen(process.env.PORT, () => {
console.log(`Server is running on ${process.env.PORT}`);
});