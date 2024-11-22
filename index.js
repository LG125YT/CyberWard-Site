const express = require('express');
const fs = require('fs');

const app = express();

function absolute(local) {
    return `/home/lg125yt/CyberWard/${local}`;
}

app.use("/", (req, res) => {
    res.sendFile(absolute('public/index.html'));
    return;
})

app.set('trust proxy', '127.0.0.1')

app.listen(8001, () => {
    console.log('Running something. Maybe.');
})
