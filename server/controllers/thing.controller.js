const mongoose = require("mongoose");
const Thing = mongoose.model("Thing");

module.exports = {
    create: (req, res) => {
        Thing.create(req.body)
            .then(thing => res.json(thing))
            .catch(err => res.status(400).json(err))
    },

    findAll: (req, res) => {
        Thing.find()
            .then(thing => res.json(thing))
            .catch(err => res.status(400).json(err))
    },

    findOne: (req, res) => {
        Thing.findOne({_id: req.params.id})
            .then(thing => res.json(thing))
            .catch(err => res.status(400).json(err))
    },

    deleteOne: (req, res) => {
        Thing.findOneAndDelete({_id: req.params.id})
            .then(deleted => res.json(deleted))
            .catch(err => res.status(400).json(err))
    },
    
    updateOne: (req, res) => {
        Thing.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators:true })
            .then(thing => res.json(thing))
            .catch(err => res.status(400).json(err))
    },
}
