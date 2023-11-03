import nodemailer from 'nodemailer';
import express from 'express';
const server = express();
import message from './email.js';

const port = 5000;


server.get('/', (req, resp) => resp.send("ENVIO DE E-MAILS COM NODEJS + NODEMAILER"));

server.get('/sendemail', (req, resp) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "",
          pass: ""
        },
    });

    transport.sendMail({
        from: "",
        to: "",
        replyTo: "",
        subject: "Envio de E-mail com NodeJs + Nodemailer",
        html: message    
    })
    .then(response => {
        console.log(response);
        console.log('Envio feito com SUCESSO!!!');
        process.exit();
    })
    .catch(error => {
        console.log(error);
        console.log('ERROR: O envio FALHOU...');
    })

});

server.listen(port, () => console.log(`Rodando na PORTA ${port}`));