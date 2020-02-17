const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");
const verifyToken = require("./verifyToken");

router.use(parser.json());
router.use(parser.urlencoded({
    extended: true
}));

//récupération de l'intégralité de la Table traduction
router.get('/traduction', (req, res) => {
    connection.query('SELECT * FROM traduction',
        (err, results) => {
            if (err) {
                console.log('Dommage!');
            } else {
                console.log('Table traduction recupéré avec succés');
                res.json(results);
            }
        });
});
// selection d'une traduction suivant id
router.get("/traduction/:id", (req, res) => {
    const idTraduction = parseInt(req.params.id);
    const sql = "SELECT * FROM traduction WHERE id = ? ";
    connection.query(sql, idTraduction, (error, results, fields) => {
        if (error) {
            res.status(501).send("couldn't get blog");
            console.log('Dommage!');
        } else {
            console.log("selection d'une traduction suivant id recupéré avec succés");
            res.json(results);
        }
    });
});

//creation d'une traduction
router.post("/traduction", (req, res) => {
    const traduction = req.body;
    const sql = `INSERT INTO traduction (
       banniere_titre,
       banniere_texte,
       banniere_telephone,
       navbar_titre,
       navbar_status_ste,
       navbar_accueil,
       navbar_services,
       navbar_societes,
       navbar_contact,
       offre__titre,
       offre_sous_titre,
       offre_texte,
       offre_texte1
       offre_texte2,
       offre_texte3,
       offre_texte4,
       offre_texte5,
       offre_texte6, 
       offre_texte7,
       offre_prix_lancement,
       offre_prix_normal,
       offre_decouvrir,
       offre_precommander,
       offre_texte_condition,
       offre_lien_condition
        ) VALUES (
            "${traduction.banniere_titre}", 
            "${traduction.banniere_texte}",
            "${traduction.banniere_telephone}",
            "${traduction.navbar_titre}", 
            "${traduction.navbar_status_ste}",
            "${traduction.navbar_accueil}",
            "${traduction.navbar_services}", 
            "${traduction.navbar_societes}",
            "${traduction.navbar_contact}",
            "${traduction.offre_titre}", 
            "${traduction.offre_sous_titre}",
            "${traduction.offre_texte}",
            "${traduction.offre_texte1}", 
            "${traduction.offre_texte2}",
            "${traduction.offre_texte3}",
            "${traduction.offre_texte4}",
            "${traduction.offre_texte5}", 
            "${traduction.offre_texte6}",
            "${traduction.offre_texte7}",
            "${traduction.offre_prix_lancement}",
            "${traduction.offre_prix_normal}",
            "${traduction.offre_decouvrir}",
            "${traduction.offre_precommander}", 
            "${traduction.offre_texte_condition}",
            "${traduction.offre_lien_condition}",
        )`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.status(501).send("couldn't post traduction" + error);
            console.log('Erreur de post traduction : ' + error.message);
        } else {
            req.body.id = results.insertId;
            res.json(req.body);
            console.log("creation d'une traduction avec succés");
        }
    });
});

// Modification d'une traduction
router.put("/traduction/:id", (req, res) => {
    const idTraduction= req.params.id;
    const traduction = req.body;
    connection.query(
        "UPDATE traduction SET ? WHERE id=?",
        [traduction, idTraduction],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't put traduction" + error);
                console.log('Dommage!');
            } else {
                res.json(req.body);
                console.log("update d'une traduction avec succés");
            }
        }
    );
});
//Suppression d'une traduction
router.delete("/traduction/:id", (req, res) => {
    const idTraduction = req.params.id;
    connection.query(
        "DELETE FROM traduction WHERE id= ?",
        [idTraduction],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't delete traduction" + error);
                console.log('Dommage!');
            } else {
                res.json(idTraduction);
                console.log("suppression d'une traduction avec succés");
            }
        }
    );
});

module.exports = router;
