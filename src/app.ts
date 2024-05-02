import express from 'express';
import { HelloService } from './HelloService';

const app = express();
const port = 3000;
const helloService = new HelloService();

app.get('/', (req, res) => {
    const message = helloService.getHelloMessage();
    res.json({ message: message });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});