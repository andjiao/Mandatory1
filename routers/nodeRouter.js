/* 
A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), 
a URL path/pattern, and a function that is called to handle that pattern.
*/
import { Router } from "express";

import { createPage } from "../util/renderPage.js";

const router = Router();

//Render page
const nodePage = createPage('/html/node.html', {
    tabTitle: "| Node |",
    cssLink: `<link rel="stylesheet" href="/pages/html/style.css">`
});


router.get("/node", (req, res) => {
    res.send( nodePage );
});

export default router