const express = require('express');
const app = express();
const dotEnv = require('dotenv');

dotEnv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const home = require('./routes/home');
const api = require('./routes/api');

app.get('/', (req, res)=>{
    res.redirect('/home');
});
app.use('/home', home);
app.use('/api/v1', api);


app.listen(port, ()=>{
    console.log('Server is running on port '+port);
});