const cors = require("cors");
const express = require("express");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(require("./routes/index"));

app.listen(5000, ()=>{
    console.log("Server has started on port 5000");
})