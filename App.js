const express = require ('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = 3001

mongoose.connect('mongodb://localhost:27017/campyplan', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on("error", function(err){
    console.error("connection error;", err);
});
mongoose.connection.once("open", () => {
    console.log("Database connected!");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})