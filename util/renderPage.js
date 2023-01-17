import fs from "fs"

const nav = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function createPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages/"+path).toString();

    return nav + page
    .replace("%%PAGE_CSS_LINK%%", options.cssLink || "")
    .replace("%%TAB_TITLE%%", options.tabTitle || "")
}




/*export function injectData(pageString, data) {
    const brokenUpHTML = pageString.split("</body>");
    const variableName = Object.keys(data)[0];
    return brokenUpHTML[0] +
        `<script>const ${variableName} = ${JSON.stringify(data[variableName])}</script></body>` +
        brokenUpHTML[1];
}*/