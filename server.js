require("dotenv").config({ path: "./config.env" });
const path = require('path');
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json());


const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) =>{
        res.send("API Running");
    });
}

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
