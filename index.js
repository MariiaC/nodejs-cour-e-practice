// console.log('Hello world')
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter.js');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async() => {
    try {
        await mongoose.connect(`mongodb+srv://user:user@cluster0.ref48dv.mongodb.net/?retryWrites=true&w=majority`);
        app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
    } catch (e) {
        console.log(e)
    }
};

start()