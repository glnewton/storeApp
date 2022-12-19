const Item = require("../models/item.js");

// INDEX -- Display list of all Items.
exports.item_list = (req, res) => {
    Item.find({}, (err, allItems) => {
        res.render('Index', { items : allItems});
    });
};
// NEW -- Display Item create form on GET.
exports.item_create_get = (req, res) => {
    res.render("New");
};  
// DELETE -- Handle Item delete on POST.
exports.item_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Item delete POST");
};
// UPDATE -- Handle Item update on POST.
exports.item_update_post = (req, res) => {
    if (req.body.inStock === "on") {
        req.body.inStock = true;
      } else {
        req.body.inStock = false;
      }
    Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
        console.log(updatedItem);
        res.redirect(`/items/${req.params.id}`);
    });
};
// CREATE -- send the filled form to db and create a new record
exports.item_create_post = (req, res) => {
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
};
// EDIT -- Display Item update form on GET.
exports.item_edit_get = (req, res) => {
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
}
// SHOW -- Display detail page for a specific Item.
exports.item_detail = (req, res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        res.render("Show", {
          item: foundItem,
        });
      });
};
// SEED -- Seed the database with some sample Items.
exports.item_seed = (req, res) => {
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
};

