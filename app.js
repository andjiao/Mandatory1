//importing
import express from "express";
const app = express();

import bodyParser from "body-parser"
//app.use
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



//laod pages
import frontpageRouter from "./routers/frontpageRouter.js"
app.use(frontpageRouter);

import jsRouter from './routers/jsRouter.js'
app.use(jsRouter);

import nodeRouter from "./routers/nodeRouter.js"
app.use(nodeRouter);

import restRouter from "./routers/restRouter.js"
app.use(restRouter);

import signupRouter from "./routers/signupRouter.js"
app.use(signupRouter);


//PORT
const PORT = process.env.PORT || 8080;

const server =app.listen(PORT,(error)=>
{
if(error){
    console.log(error);
}
console.log("Server is running on port", server.address().port)
});
