const express = require("express");
const router = express.Router();



// Index = Show all records
router.get('/items', (req, res) => {
    Item.find({}, (err, allItems) => {
        res.render('Index', { items : allItems});
    });
});
// New - Get a form to create a new record
router.get("/items/new", (req, res) => {
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
app.router("/items/:id/edit", (req, res) => {
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
app.router("/items/:id", function (req, res) {
  Item.findById(req.params.id, (err, foundItem) => {
    res.render("Show", {
      item: foundItem,
    });
  });
});
// Seed - populate the database for testing
app.router("/items/seed", (req, res) => {
  Item.create(
    [
      {
        name: "grapefruit shirt",
        image: "https://i.etsystatic.com/24575487/r/il/980ee4/3787641689/il_794xN.3787641689_hhyr.jpg",
        sku: 121318,
        color: "pink",
        description: "A pink grapefruit shirt",
        quantity: 5,
        price: 10.99,
        inStock: true,
      },
      {
        name: "grapefruit mug",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSBZ0bWQgCtJpW8bTviXOcZKejPc6VFHuTQ&usqp=CAU",
        sku: 121319,
        color: "pink",
        description: "A pink grapefruit mug",
        quantity: 5,
        price: 18.99,
        inStock: true,
      },
      {
        name: "Basketball",
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

//module.exports = router;