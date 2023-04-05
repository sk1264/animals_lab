const express = require('express');
const router = express.Router();
const startAnimals = require('../db/animalsSeedData.js')
const Animal = require('../models/animal.js')

// Post
router.post('/', async (req, res) => {
	console.log(req.body)
	req.body.extinct = req.body.extinct === 'on' ? true : false;
	const animal = await Animal.create(req.body);
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
    const animals = await Animal.find({});
    res.render("animals/index.ejs", {animals});
});

router.get('/seed', async (req, res) => {
	await Animal.deleteMany({});
	await Animal.create(startAnimals);
	res.redirect('/animals');
});

router.get('/:id', async (req, res) => {
	const animal = await Animal.findById(req.params.id);
	res.render("animals/show.ejs", {animal})
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
