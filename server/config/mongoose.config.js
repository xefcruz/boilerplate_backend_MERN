const mongoose = require('mongoose')
const db_name = "thing_db"; //change name inside variable

mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log(`Connected to ${db_name}`))
    .catch(err => console.log(`Failed to connect to ${db_name}`, err))

require("../models/thing.model");