/*   Client va WebServerlar orasidagi data 'json' formatida 
     BSSR --> back-end server side rendering. traditional usul bo'lib, back-endda html yasab clientga jo'natish.
     ejs  --> orqali HTML front-endni yasaladi back-endni ichida.
*/



console.log("Web Serverni boshlash");
const express = require('express');
const app = express();
const http = require("http");


//express we server 4 bosqichi
//#1 birinchi bosqish                 -->  expressga kirib kelyotgan malumotlarga bog'liq bo'lgan codelar yoziladi.
app.use(express.static("public")); // -->  xar-qanday browserdan kirib kelyotgan zaproslar uchun "public folder" ochiq degan manoni anglatadi. (faqat public folderini ko'roladi )
app.use(express.json());          //  -->  kirib kelyotgan json formatidagi datani object xolatiga o'girib beradi.
app.use(express.urlencoded({ extended: true })); // --> HTML formdan post qilinga narsalarni qabul qilib oladi.


//#2 Sessionlarga bog'liq bo'lgan express codelar

//#3 View code (front-end)
app.set("views", "views");            // --> folder ko'rsatilyabdi
app.set("view engine", "ejs");      // --> view engin "ejs" ekanligini ko'rsatish


//#4 Routing codes (Routerlarga mo'ljallangan)
app.post("/create-item", (req, res) =>{
    console.log(req.body);
    res.json({test:"success"});
});
app.get("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);       // --> serverni quirish. (createServer bir parametr qabul qiladi. Bu biz yasab olgan express app)
const PORT = 3000;                             //--> serverni malum bir portga listen qildirish 
server.listen(PORT, function () {   
    console.log(`The server is running succesfully on PORT ${PORT}`) }); // --> server muvoffaqiyatlik ishlasa bu console.log ishga tushadi                                                 