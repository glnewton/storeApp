// MongoDB & Mongoose Configuration

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI
//const LOCAL_MONGO_URI = "mongodb://localhost:27017/"
// mongoose.connect(MONGO_URI);
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.set('strictQuery', true);

// Connection Error/Success -- Define callback functions for various events

const dbConnection = mongoose.connection;
// db.once('open', ()=> {console.log('Connected to MongoDB')})
// db.on("error", (err) => console.log(err.message + " is MongoDB not running?"));
// db.on("open", () => console.log("MongoDB connected: ", MONGO_URI))
// db.on("close", () => console.log("MongoDB disconnected"))


const getDBConnection = () => {
    try {
        mongoose.connect(MONGO_URI);
        mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        mongoose.set('strictQuery', true);
        dbConnection.once('open', ()=> {console.log('Connected to MongoDB')})
        dbConnection.on("error", (err) => console.log(err.message + " is MongoDB not running?"));
        dbConnection.on("open", () => console.log("MongoDB connected: ", MONGO_URI))
        dbConnection.on("close", () => console.log("MongoDB disconnected"))
    }
    catch (err) {
        console.log(err)
    }
    return dbConnection;
}

module.exports.dbConnection = () => getDBConnection();