require('dotenv').config();
const nodemailer = require("nodemailer");
const express = require('express');
const router = express.Router();
const { HENRY_INSTRUMENT_USERNAME, HENRY_INSTRUMENT_PASS } = process.env;
const { getHtmlForOrder } = require('./controllers/Mail');

router.post('/welcome', async (req, res) => {
    const { username } = req.body;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: HENRY_INSTRUMENT_USERNAME,
            pass: HENRY_INSTRUMENT_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `${HENRY_INSTRUMENT_USERNAME}`,
        to: `${username}`,
        subject: 'Welcome',
        html: '<H1>Welcome to Henry Instruments</h1>',
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(404).send(error);
        } else {
            console.log('mail enviado');
            res.status(200).jsonp(req.body);
        }
    });
});

router.post('/neworder', async (req, res) => {
    const { username, idOrder, date, products, totalAmount } = req.body;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: HENRY_INSTRUMENT_USERNAME,
            pass: HENRY_INSTRUMENT_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `<${HENRY_INSTRUMENT_USERNAME}>`,
        to: `${username}`,
        subject: 'New Order',
        html: getHtmlForOrder(idOrder, date, products, totalAmount),
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(404).send(error.message)
        } else {
            console.log('mail enviado');
            res.status(200).jsonp(req.body);
        }
    });
});

router.post('/ordersuccessfull', async (req, res) => {
    const { username } = req.body;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: HENRY_INSTRUMENT_USERNAME,
            pass: HENRY_INSTRUMENT_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `<${HENRY_INSTRUMENT_USERNAME}>`,
        to: `${username}`,
        subject: 'Order Succesfull',
        html: '<H1>Order successfull</h1>',
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(404).send(error.message)
        } else {
            console.log('mail enviado');
            res.status(200).jsonp(req.body);
        }
    });
});

module.exports = router;