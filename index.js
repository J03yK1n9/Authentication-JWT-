const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')


dotenv.config();



// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => console.log('connected to authdb'))

// Middlewares
app.use(express.json())
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server is up and running'));






// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.DB_CONNECT;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

