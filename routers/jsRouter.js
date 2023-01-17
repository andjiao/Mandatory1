/* 
A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), 
a URL path/pattern, and a function that is called to handle that pattern.
*/

import { Router } from "express";
const router = Router();

import { createPage } from "../util/renderPage.js";

//Render jsPage
const jsPage = createPage('/html/javascript.html', {
    tabTitle: "| JavaScript|",
    cssLink: `<link rel="stylesheet" href="/pages/html/style.css">`
});


router.get("/jspage", (req, res) => {
    res.send( jsPage );
});

export default router