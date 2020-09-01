const API = require('call-of-duty-api')({ platform: "battle" });
const router = require("express").Router();
const db = require ("../../models");

// router.post("/player/:playerId", async (req, res) => {
//     API.login("magire01@gmail.com", "redBanana99223355$");
//     const playerId = req.params.playerId;
//     await API.MWBattleData(playerId)
//     .then(data => {
//         console.log(data.br)
//         db.Stats.create({ player: playerId, wins: data.br.wins.toString() })
//     }).catch(err => {
//         console.log(err);
//     });
// });

router.post("/getId", async (req, res) => {
    API.login("magire01@gmail.com", "redBanana99223355$");
    const playerId = req.body.player;
    await API.MWBattleData(playerId)
    .then(data => {
        console.log(data.br)
        db.Stats.create({ player: playerId, wins: data.br.wins.toString() })
    }).catch(err => {
        console.log(err);
    });
});

router.get("/", async (req, res) => {
    API.login("magire01@gmail.com", "redBanana99223355$");
    const playerId = req.body.player
    await API.MWBattleData(playerId)
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });

    // db.Stats.find((err, stat) => {
    //   res.send(stat);
    //   console.log(stat);
    // })
});

router.get("/player/:id", (req, res) => {
    db.Stats.findOne({ player: req.params.id }, (err, stat) => {
        res.send(stat)
    });
})
module.exports = router;
