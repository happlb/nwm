'use strict';
const express = require('express')
const router = express.Router();
router.get('/', (req,res) => {
    console.log('recipe id recieved :', req)

    let recipe_id = req.body.recipe_id;
    if (recipe_id == 1)
        res.send('guac')
    if (recipe_id == 2)
        res.send('nachos')
    if (recipe_id == 3)
        res.send('guac and nachos')
    else
        res.send('PISS')
})

//router.get('/tasks', () => {/* another function*/})
module.exports = router;
