const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({path : './.env'});
const public = path.join(__dirname, './public');

app.set('view engine','hbs')
app.use('/' , require('./routes/pages'));
app.use(express.static(public))
app.use('/auth' , require('./routes/auth'))//dont forget to set it in the front form 
app.use(express.urlencoded({extended : false}))//collecting info from the user form
app.use(express.json()); //infos coming from the  form are coming as jsons


const db = mysql.createConnection({
    host: process.env.DATABASE_host,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    database: process.env.DATABASE 
});


db.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
    } else {
        console.log('Connected to MySQL ');
    }
});





const port = 3306;
app.listen(port, () => {
    console.log('Express server started on port', port);
});
