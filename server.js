"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
// Definiere einen Endpunkt für den "Hello World!"-Service
app.get('/hello', function (req, res) {
    // Gib "Hello World!" als JSON zurück
    res.json({ message: 'Hello World!' });
});
// Starte den Server
app.listen(port, function () {
    console.log("Server gestartet auf Port ".concat(port));
});
