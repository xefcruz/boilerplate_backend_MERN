const things = require("../controllers/thing.controller");


module.exports = (app) => {
    app.get("/things", things.findAll);
    app.post("/things", things.create);
    app.get("/things/:id", things.findOne);
    app.delete("/things/:id", things.deleteOne);
    app.put("/things/:id", things.updateOne);

}