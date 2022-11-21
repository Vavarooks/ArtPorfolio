const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/porfolio',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});