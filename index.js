/* => If I(J03y K1n9) have sold this API to you as part of a larger, 
more customized product, 
or given you access to the Git Repo for this API, 
I suggest you read the README.md file, 
unless you know exactly what you are doing, 
or have acquired my services, in which case this is not relevant to you.  */

// Import dependancies
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')


// initiates dotenv
dotenv.config();



// Connect to DB
/* DB_CONNECT var has the mongoDB connection URL/URI, 
you can replace it in .env file with one from your cluster in mongoDB Atlas.
If successfully connected, the console will log 'connected to authdb'.
If '{useUnifiedTopology: true}' parser is removed, 
check mongoDB documentation for current parser.
You may see a deprecation warning but unless removed, it should work.
(the same stands for @hapi/Joi Dependancy)  */
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => console.log('connected to authdb'))

/* -----------MiddleWares----------- */
// This allows us to send post request
app.use(express.json())
/* -----------Route Middlewares------------ */
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
// start the server
app.listen(3000, () => console.log('Server is up and running'));






// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.DB_CONNECT;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

