const nodemailer = require('nodemailer');
const express = require('express');
const server = express();

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
        html:`<h1>EAI, ZÉ!</h1>
              <h2>Já Comprou uma televisão, Zé!?</h2>
              <p>O que vêm junto com a televisão?</p>

              <p><strong>Alternativas:</strong></p>
              <ul>
                  <il>a - A caixa de Papelão</il>
                  <br>
                  <il>b - O Controle Remoto</il>
                  <br>
                  <il>c - O Manual</il>
                  <br>
                  <il>d - O Isopor</il>
              </ul>`      
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