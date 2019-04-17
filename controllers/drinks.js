// Require needed modules
let express = require('express')


// Declare an express router
let router = express.Router()

// Reference the models
// let db = require('../models')

// GET /drinks
router.get('/', (req,res)=> {
	res.render('drinks/index')
})

// POST /drinks
router.post('/', (req,res)=> {
	res.send(req.body)
})


router.get('/new', (req,res)=> {
	res.render('drinks/new')
})

router.get('/:id', (req,res)=> {
	res.render('drinks/show')
})

// EXPORT the routes form this file
module.exports = router