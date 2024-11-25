const express = require('express');

const app = express();

function absolute(local) {
    return `/home/lg125yt/CyberWard/public/${local}`;
}


app.use("/", (req, res) => {
    let path = req.path;

    if (path === "/") {
        res.sendFile(absolute('index.html'));
        return;
    } else {
        if (path.startsWith("//")) {
            path = path.replace("^\/\/","/")
        }

        //Issue: You cannot go to https://cyberward.xyz/LG125YT without the css not being fetched (If you append a forward slash to the end of the url, it works fine). This is the solution.
        //It feels like a hack, but I can't find any other way to fix this.
        if (path === "/LG125YT") {
            res.sendFile(absolute('LG125YT/index.html'));
            return;
        }

        res.sendFile(absolute(path));
        return;
    }
})


app.set('trust proxy', '127.0.0.1')

app.listen(8001, () => {
    console.log('Running something. Maybe.');
})
