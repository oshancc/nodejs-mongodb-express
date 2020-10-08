const express = require('express');
const router = express.Router();
const User = require('../models/user');


//Get ALL the users
router.get('/', async (req, res) => {
   try{
        const users = await User.find();
        res.json(users);
   }catch(err){
        res.json({message: err});
   }
});


//POST(submit) a user
router.post('/signup', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message: err});
    }
});

//LOGIN a user

router.post('/login', async (req, res) => {
    
 
        const loginUser = await User.findOne(
            { email: req.body.email,password:req.body.password}, function(err, us){
                if(err){
                   console.log(err);
                   return res.status(500).send();
                }
                if(!us){
                    return res.status(404).send();
                }
                return res.status(200).send();
               
                
            }); 
        
   
});

module.exports = router;