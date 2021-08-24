const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if(err){
        console.log(err);
    }

    const db = client.db('recipe_organiser');
    const recipeCollection = db.collection('recipes');
    const recipeRouter = createRouter(recipeCollection)
    app.use('/api/recipes', recipeRouter);

    app.listen(5000, function(){
        console.log(`app listening on port ${this.address().port}`);
    })
})