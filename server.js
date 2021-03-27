const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// going to require your mongoose.config file
require("./server/config/mongoose.config")

// going to require your routes file
require("./server/routes/thing.routes")(app)

// app.get("/", (req, res) => {
//   res.json("Hello World");
// });

app.listen(port, () => console.log(`Listening on port ${port}`));