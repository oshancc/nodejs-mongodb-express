const express = require('express');
const router = express.Router();
const Item = require('../models/item');


//Get ALL the items
router.get('/', async (req, res) => {
   try{
        const items = await Item.find();
        res.json(items);
   }catch(err){
        res.json({message: err});
   }
});


//POST(submit) a item
router.post('/add', async (req, res) => {
    const item = new Item({
        itmName: req.body.itmName,
        desc: req.body.desc,
        price: req.body.price,
        size: req.body.size,
        category: req.body.category
    });
    try{
        const savedItem = await item.save();
        res.json(savedItem);
    }catch(err){
        res.json({message: err});
    }
});

//Delete an item
router.delete('/delete/:itemId', async(req, res) => {
    try{
        const removedItem = await Item.remove({_id: req.params.itemId});
    }catch(err){
        res.json({message: err});
    }
});

//UPDATE price of a item
router.put('/update/:itemId', async (req, res) => {
    try{
        const updateItem = await Item.updateOne(
            {_id: req.params.itemId},
            {$set: {price: req.body.price}}
        );
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;