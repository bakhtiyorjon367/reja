const http = require("http");
const mongodb  = require("mongodb");

let db;
const connectionString ='mongodb+srv://baxtiyor:Gda..ad9988@cluster.qwyctbz.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster';


mongodb.connect(connectionString, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, 
  (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("mongodb connection succed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);              
        const PORT = 3000;                                  
        server.listen(PORT, function () {   
        console.log(`The server is running succesfully on PORT ${PORT}: http://localhost${PORT}`) }); 
    }
} );









