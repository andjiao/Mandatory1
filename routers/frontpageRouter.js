
import { Router } from "express";
const router = Router();

import { createPage } from "../util/renderPage.js";

const frontPage = createPage('/frontpage/frontpage.html', {
    tabTitle: "| JavaScript|",
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});


router.get("/", (req, res) => {
    res.send( frontPage);
});

export default router