let express = require("express");
let bodyparser = require("body-parser");
let upload = require("express-fileupload");
let session = require("express-session");
let userroutes = require("./routes/user");
let adminroute = require("./routes/admin");

let app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(upload());
app.use(session({
    secret:"skfhwekfhwekfjwefkjw",
    resave:true,
    saveUninitialized:true
}));
app.use(express.static("public/"));

app.use("/",userroutes);
app.use("/admin",adminroute);

let port = 1000;
app.listen(port,()=>{
    console.log("This Server running on this port: http://localhost:"+`${port}`);
});


