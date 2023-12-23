const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DATABASE_host,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    database: process.env.DATABASE 
});

exports.register = (req, res)=>{
    console.log(request.body);
    const name = req.body.name; //depends on its name on front
    const email = req.body.email;
    const password = req.body.password ;
    const passwordConfirm  = req.body.passwordConfirm;
    //const {name , email , password, passwordConfirm} = req.body ;
    db.query('SELECT email FROM users WHERE email = ?' , [email] ,(error,results)=>{
        if(error){
            console.log(error);
        }
        
        if(results.length>0){
            //return front page
            return res.render('register' , {
                message : 'that email is already in use'
            })
        }else if (password !== passwordConfirm){
            return res.render('register' , {
                message : 'passwords do not much' ,
            })


        }

        
    })
    res.send("form submitted") // render the page that comes after singn up
}