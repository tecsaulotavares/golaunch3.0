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



// server.get("/",function(req,res){
//     const about = {
//         avatar_url:'https://avatars0.githubusercontent.com/u/56646783?s=460&u=fc90400ced39f57c0b061bb5c9148fc5f2057153&v=4',
//         name:'Saulo Tavares',
//         role:'Aluno - Rocketseat',
//         description:'Programador full-stack! <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
//         links:[
//             {name:'GitHub',url:'https://github.com/tecsaulotavares'},
//             {name:'Linkedin',url:'https://linkedin.com/in/saulo-tavares-46a70957'},
//         ]

//     }
//     return res.render("about",{about});
// })

// server.get("/video/", function(req, res){
//     const id = req.query.id;

//     const video = videos.find(function(video) {
//         return video.id == id
//     })

//     if(!video){
//         return res.send("Video not found!")
//     }

//     return res.render("video",{item: video});
// })

// server.get("/portfolio",function(req,res){
//     return res.render("portfolio",{items:videos});
// })

server.listen(5000,()=>{console.log("Server On")})

