const mongoose = require('mongoose');
// connecting to mongoose
// add your mongod b
mongoose.connect('mongodb://127.0.0.1/tracker_db');
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log(' succsfully Connected to Database :: MondoDB');
});

module.exports=db;
