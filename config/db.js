//brings in mongoose to the application. this is used to
//connect to our mongodb database
const mongoose = require('mongoose');
//brings in config that allows us to get the mongoURI
const config = require('config');
const db = config.get('mongoURI');

//currently used to using the promise version but according
//to this tutorial async is new standard?

//async will return a promise function with try and catch
//makes code more radable
const connectDB = async () => {
  try {
    //connect to mongo db and colse log if successfull
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    //if not successful console log the error message
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
