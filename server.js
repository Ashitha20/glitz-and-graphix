const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/glitzDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Schema for custom orders, contacts, and wishlist
const contactSchema = {
    name: String,
    email: String,
    message: String
};

const customOrderSchema = {
    customProduct: String
};

const wishlistSchema = {
    items: [String]
};

const Contact = mongoose.model('Contact', contactSchema);
const CustomOrder = mongoose.model('CustomOrder', customOrderSchema);
const Wishlist = mongoose.model('Wishlist', wishlistSchema);

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/shop', (req, res) => {
    res.render('shop');
});

app.get('/custom', (req, res) => {
    res.render('custom');
});

app.get
