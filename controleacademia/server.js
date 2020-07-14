const express = require("express")
const nunjucks = require("nunjucks");
const routes = require("./routes");

const server = express();

/*middleware - interceptar ponto A ao B  */
server.use(express.urlencoded({extended:true})) //extend: funciona o req.body 
server.use(express.static('public')) 
server.use(routes); 

server.set("view engine","njk");

nunjucks.configure("views",{
    express: server,
    autoescape:false,
    noCache: true
})

server.listen(5000,()=>{console.log("Server On")})

