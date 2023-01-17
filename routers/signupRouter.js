
import { Router } from "express";
const router = Router();

import { createPage } from "../util/renderPage.js";


const signupPage = createPage('/signup/signup.html', {
    tabTitle: "| SIGNUP|",
    cssLink: `<link rel="stylesheet" href="/pages/signup/signup.css">`
});

router.get("/signup", (req, res) => {
    res.send( signupPage);
});

export default router