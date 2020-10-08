const mongoose = require('mongoose');

const URI="mongodb+srv://dbUser:dbUser@cluster0.ul6hk.mongodb.net/assignment?retryWrites=true&w=majority";

const connectDb = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Db connected..!');
};

module.exports = connectDb;  