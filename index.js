const dotenv = require('dotenv');
dotenv.config();

const express = require('express')

const app = express();

app.get('/endpoint1',(req,res,next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'Hello from endoint1'
        }
    })
}) 

app.get('/endpoint2',(req,res,next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'Hello from endoint2'
        }
    })
}) 

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('server is running on this port ${PORT}'));