// Dependencies & Imports
require("dotenv").config();
const express = require("express");
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const indexRouter = require("./routes/index");

const Item = require("./models/item.js");

// Global Configuration Variables 
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI

// Express Configuration

const app = express();

// View Engine Configuration

app.set("views", path.join(__dirname, "views")); // Keep?
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Middleware Configuration

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
// app.use('/public', express.static('public')) 
app.use(express.static(path.join(__dirname, "public")));  // Keep?

// Routes Configuration

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// Error Handling Configuration

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Mongoose Configuration

mongoose.connect(MONGO_URI);
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('strictQuery', true);
const db = mongoose.connection;
db.once('open', ()=> {
    console.log('Connected to MongoDB')
})
// Connection Error/Success -- Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", MONGO_URI))
db.on("close", () => console.log("mongo disconnected"))


// Seed route - populate the database for testing
app.get("/items/seed", (req, res) => {
    Item.create(
      [
        {
          name: "grapefruit shirt",
          image: "",
          sku: 12318,
          color: "pink",
          quanity: 5,
        },
        {
            name: "grapefruit mug",
            image: "",
            sku: 12319,
            color: "pink",
            quanity: 5,
        },
        {
            name: "grapefruit hat",
            image: "",
            sku: 12320,
            color: "pink",
            quanity: 6,
        },
      ],
      (err, data) => {
        res.redirect("/items");
      }
    );
});
// Root 
app.get('/', function(req, res){
    res.render("Home");
});
// Index = Show all records
app.get('/items', (req, res) => {
    Item.find({}, (err, allItems) => {
        res.render('Index', { items : allItems});
    });
});
// New - Get a form to create a new record
app.get("/items/new", (req, res) => {
    res.render("New");
});
// Delete - Delete this one record
app.delete('/items/:id', (req, res)=>{
    Item.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/items');//redirect back to items index
    });
});
// Update - Modifying a record
app.put("/items/:id", (req, res) => {
    if (req.body.inStock === "on") {
      req.body.inStock = true;
    } else {
      req.body.inStock = false;
    }
    Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
      console.log(updatedItem);
      res.redirect(`/items/${req.params.id}`);
    });
  });
// Create - send the filled form to db and create a new record
app.post("/items", (req, res) => {
  if (req.body.inStock === "on") {
    //if checked, req.body.inStock is set to 'on'
    req.body.inStock = true; //do some data correction
  } else {
    //if not checked, req.body.inStock is undefined
    req.body.inStock = false; //do some data correction
  }
  Item.create(req.body, (error, createdItem) => {
    res.redirect("/items");
  });
});
// Edit - Get the form with the record to update
app.get("/items/:id/edit", (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    //find the item
    if (!err) {
      res.render("Edit", {
        item: foundItem, //pass in the found item so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Show route - Show me a particular record
app.get("/items/:indexOfItemsArray", function (req, res) {
  Item.findById(req.params.indexOfItemsArray, (err, foundItem) => {
    res.render("Show", {
      item: foundItem,
    });
  });
});
app.listen(PORT, () => {
  console.log("listening");
});

module.exports = app;






