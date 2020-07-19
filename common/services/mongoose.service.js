const mongoose = require('mongoose');
let count = 0;

const options = {
    autoIndex: false, 
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, 
    poolSize: 10, 
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    //geting rid off the depreciation errors
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    
};
// mongoose.Promise = global.Promise;
const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    //mongoose.connect("mongodb://mongo:27017/authflowdb", options).then(()=>{
    mongoose.connect("mongodb://localhost:27017/authflowdb", options).then(()=>{
        console.log('MongoDB is connected')
        
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;
