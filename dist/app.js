"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelloService_1 = require("./HelloService");
const app = (0, express_1.default)();
const port = 3000;
const helloService = new HelloService_1.HelloService();
app.get('/', (req, res) => {
    const message = helloService.getHelloMessage();
    res.json({ message: message });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
