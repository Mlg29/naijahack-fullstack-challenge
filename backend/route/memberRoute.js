
const router = require('express').Router()
const Members = require('../model/memberModel')

router.get('/', (req, res) => {
    Members.find()
        .then(member => res.json(member))
        .catch(err => res.status(400).json('Error: ' + err))
})


//To get a single member
router.get('/:id', (req, res) => { 
    Members.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add',(req, res) => {
    const name = req.body.name
    const image = req.body.image
    const email =  req.body.email
    const location = req.body.location

    const newMember = new Members({
        name,
        image,
        email,
        location
    });
    newMember.save()
        .then(() => res.json('Member Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router