/////////////////////////////////////////////////////
// Dependencies & Imports
/////////////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");

const indexRouter = require("./routes/index");
// const itemsRouter = require("./routes/itemsRoutes");

const Item = require("./models/item.js");

// Global Configuration Variables 
const PORT = process.env.PORT || 3000;

// Establish Database Connection

const db = require('./database/dbConnection');
db.dbConnection();

// Express Configuration

const app = express();

// View Engine Configuration --  Configure the app (app.set)
app.set("views", path.join(__dirname, "views")); // Keep?
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

/////////////////////////////////////////////////////
// Middleware Configuration - Mount Middleware (app.use)
/////////////////////////////////////////////////////
app.use(logger("dev"));     //logging
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride("_method"));         // override for put and delete requests from forms
app.use(express.urlencoded({ extended: false }));
//app.use(express.static("public")); // serve files from public statically
//app.use('/public', express.static('public')) 
// app.use(express.static(path.join(__dirname, "public")));  // Keep?
app.use(express.static(__dirname + '/public'))


////////////////////////////////////////////
// Routes Configuration - Mount Routes 
////////////////////////////////////////////
// Home/Root/Index Route

app.use("/", indexRouter);

//app.use("/items", indexRouter); // Add items routes to middleware chain.


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
app.delete('/items/:id/delete', (req, res)=>{
    Item.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/items');//redirect back to items index
    });
});
// Update - Modifying a record
app.put("/items/:id/update", (req, res) => {
    if (req.body.inStock === "on") {
      req.body.inStock = true;
    } else {
      req.body.inStock = false;
    }

    if (req.body.quantity === "BUY"){
      Item.findByIdAndUpdate(req.params.id, { $inc: { "quantity": -1 } }, (err, updatedItem) => {
          res.redirect(`/items/${req.params.id}`) // redirecting to the Show page
        })
      }
    else{
      Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
        console.log(updatedItem);
        res.redirect(`/items/${req.params.id}`);
      });
    }
});
// Create - send the filled form to db and create a new record
app.post("/items/create", (req, res) => {
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
// Show - Show me a particular record
app.get("/items/:id", function (req, res) {
  Item.findById(req.params.id, (err, foundItem) => {
    res.render("Show", {
      item: foundItem,
    });
  });
});
// Seed - populate the database for testing
app.get("/items/seed", (req, res) => {
  Item.create(
    [
      {
        name: "grapefruit shirt1",
        image: "https://i.etsystatic.com/24575487/r/il/980ee4/3787641689/il_794xN.3787641689_hhyr.jpg",
        sku: 121318,
        color: "pink",
        description: "A pink grapefruit shirt",
        quantity: 5,
        price: 10.99,
        inStock: true,
      },
      {
        name: "grapefruit mug1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSBZ0bWQgCtJpW8bTviXOcZKejPc6VFHuTQ&usqp=CAU",
        sku: 121319,
        color: "pink",
        description: "A pink grapefruit mug",
        quantity: 5,
        price: 18.99,
        inStock: true,
      },
      {
        name: "Basketball1",
        image: "https://cdn.pixabay.com/photo/2013/07/13/09/46/basketball-155997__340.png",
        sku: 121318,
        color: "Orange",
        description: "A basketball",
        quantity: 5,
        price: 10.99,
        inStock: true,
      },
    ],
    (err, data) => {
      res.redirect("/items");
    }
  );
});

//////////////////////////////////////////////
// Error Handling Configuration
//////////////////////////////////////////////

//catch 404 and forward to error handler
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


//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
app.listen(PORT, () => {
  console.log("listening");
});

module.exports = app;






