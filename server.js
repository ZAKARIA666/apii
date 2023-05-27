const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User=require("./models/usermodel");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
// Connect to the database and start the server
mongoose // connecter à une base de données MongoDB à l'aide de Mongoose
.connect("mongodb+srv://zak:zinelabidine29225040@cluster0.5403ovo.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      //méthode "listen" démarre le serveur HTTP
      console.log(`Example app listening on port ${3000}`);
    });
    //et écoute les demandes entrantes sur le port spécifié
  })
  .catch((err) => console.log(err));



app.get('/users', async (req, res) => { 
  await User.create({
    name: "new user",
    email: "jbkj"
  });
    // const users = await User.find();
    try{
        console.log('data sent')
        // res.send(users);
    } catch(err) {
        console.log(err);
    } 
});

app.post('/users', (req, res) => {
  // Implement logic to add a new user to the database
});

app.put('/users/:id', (req, res) => {
  // Implement logic to edit a user by ID in the database
});

app.delete('/users/:id', (req, res) => {
  // Implement logic to remove a user by ID from the database
});
