const nodemailer = require("nodemailer");
const express = require('express');
const router = express.Router();
const { HENRY_INSTRUMENT_USERNAME, HENRY_INSTRUMENT_PASS } = process.env;

router.post('/welcome', async (req, res) => {
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
        to: 'usuario32@ejemplo.com', //el parametro 'to' es el username del usuario logueado que viene por req.body
        subject: 'hello!!',
        html: '<H1>Welcome to Henry Instruments</h1>',
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

router.post('/neworder', async (req, res) => {
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
        to: 'usuario32@ejemplo.com', //el parametro 'to' es el username del usuario logueado que viene por req.body
        subject: 'hello!!',
        html: '<H1>New order</h1>',
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
        to: 'usuario32@ejemplo.com', //el parametro 'to' es el username del usuario logueado que viene por req.body
        subject: 'hello!!',
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