const express = require('express');
const router = express.Router();
const startAnimals = require('../db/animalsSeedData.js')
const Animals = require('../models/animals.js')

// Post
router.post('/', async (req, res) => {
	console.log(req.body)
	req.body.extinct = req.body.extinct === 'on' ? true : false;
	const animal = await Animals.create(req.body);
	res.redirect('/animals');
});

// New
router.get('/new', (req, res) => {
    res.render("animals/new.ejs")
   })

router.get('/:id/edit', async (req, res) => {
	const animal = await Animal.findById(req.params.id);
	res.render("animals/edit.ejs", {animal})
})

router.get('/', async (req, res) => {
    const animals = await Animals.find({});
    res.render("animals/index.ejs", {animals});
});

// Delete
router.delete('/:id', async (req, res) => {
	const animal = await Animals.findByIdAndDelete(req.params.id);
	res.redirect('/animals');
});

// Update
router.put('/:id', async (req, res) => {
	const id = req.params.id;
	req.body.extinct = req.body.extinct === 'on' ? true : false;
	const animal = await Animals.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	res.redirect('/animals');
});

module.exports = router;
