/* 
A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), 
a URL path/pattern, and a function that is called to handle that pattern.
*/

import { Router } from "express";
const router = Router();

import { createPage } from "../util/renderPage.js";



//Render page
const restPage = createPage('/html/rest.html', {
    tabTitle: "| REST|",
    cssLink: `<link rel="stylesheet" href="/pages/html/style.css">`
});


router.get("/rest", (req, res) => {
    res.send(restPage );
});

export default router