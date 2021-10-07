const http =require('http');
const express =require('express');

const app =express();

app.use((req, res, next) => {
console.log("middleware");
next(); // Allows the request to conitnue
});

app.use((req, res, next) => {
    console.log("another middleware");
    res.send('<h1>Hello from express nodejs</h1>'); // Allows the request to conitnue
    });
const server=http.createServer(app);
server.listen(3000);