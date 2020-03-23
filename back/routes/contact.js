require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const router = express();
const nodemailer = require("nodemailer");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

let smtp = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_EXPEDITION,
        pass: process.env.PASSWORD,
    }
};

let transporter = nodemailer.createTransport(smtp);

router.post("/contact", (req, res) => {
    const email = req.body.email;
    const lastname = req.body.lastname;
    const description = req.body.description;
    const object = req.body.object;
    const mess_expedit =
        `
    <div>
    <h4> ${lastname}, </h4>
    <h4> Nous venons de prendre en compte votre demande de contact. Vous saurez contacté dans les plus bref delais.</h4>
    <h5> <font color="red">Ceci est un message automatique, merci de ne pas repondre. </font></h5>
    <div>
    <img src="cid:uniq-logo.png" alt="logo" height="65rem" wildth="65rem"/>
    <p>FARMVIZ SAS  50 Rue Chanzy, 28000 CHARTRES
    </p>
    <a href="tel:0234401467">+33(0)2 34 40 14 67</>
    </div>
    `;

    const message =
        `
       <div>
       <h4>Sujet:${object}</h4>
        <h4>Nom:${lastname}</h4>
         <h4>Email: ${email}</h4>
         <h4>Message: ${description}</h4>
         <div>
         <img src="cid:uniq-logo.png" alt="logo" height="65rem" wildth="65rem"/>
         <p>FARMVIZ SAS  50 Rue Chanzy, 28000 CHARTRES
         </p>
         <a href="tel:0234401467">+33(0)2 34 40 14 67</>
         </div>
         <h5> <font color="red">Ceci est un message automatique, merci de ne pas repondre. </font></h5>
       </div>
        `
    // send mail with defined transport object
    let mailOptions = {
        from: process.env.EMAIL_EXPEDITION, // adresse email expediteur
        to: process.env.EMAIL_EXPEDITION, // adresse email reception
        subject: ' Contact ' + ' ' + req.body.lastname + ' ' + req.body.object, // Subject line
        attachments: [
            {
                filename: 'logo.png',
                path: __dirname +'/logo.png',
                cid: 'uniq-logo.png',
            },
        ],
        html: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {

            res.status(501).send(error);
        }
        else {
            res.status(200).json({
                message: "Votre demande de contact à bien été envoyée."
           });
        }
    })

 // envoie email with defined transport object
     let mailOptionsExpedit = {
        from: process.env.EMAIL_EXPEDITION, // adresse email expediteur
        to: req.body.email, // adresse email reception
        subject: ' Contact FarmViz', // Sujet 
        attachments: [
            {
                filename: 'logo.png',
                path: __dirname +'/logo.png',
                cid: 'uniq-logo.png',
            },
        ],
        html: mess_expedit
    };

    transporter.sendMail(mailOptionsExpedit, (error, info) => {
        if (error) {

            res.status(501).send(error);
        }
        else {
            res.status(200).json({
                message: "Votre demande de contact à bien été envoyé."
            });
        }
    })

})

module.exports = router;
