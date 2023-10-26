import express from 'express';
import jwt from 'jsonwebtoken';
//const jwt = require('jsonwebtoken');
//const express = require('express');

const app = express();
const port = 8000;
const secretKey = 'secret123'; // Замените на свой секретный ключ
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ с любого источника
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Разрешить методы
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешить заголовки
    next();
});

//require('./routes')(app); // указываем папку  routes и передаем app

// читать  json  запросы при отправки post  запросов
app.use(express.json());

app.listen(port, (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log('The server is running on port ' + port)
});



app.get('/', (req, res) => {
    // Устанавливаем заголовок Content-Type как text/html
    res.setHeader('Content-Type', 'text/html');

    // Отправляем HTML-разметку с сообщением внутри тега <h1>
    res.send('<h1>initial require 123</h1>');

})

app.post('/login', (req, res) => {
    const token = jwt.sign(
        {
            email: req.body.email,
            fullName: 'Amir'
        },
        secretKey
    );

    console.log(req.body);
    res.json({
        success: true,
        token,
    });
});