const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const API = require('call-of-duty-api')({
    platform: "battle"
});
const Match = require('../../models/match');
const { findById } = require('../../models/Post');
const { mongo } = require('mongoose');
const cod = require('../../models/match');
require('dotenv/config');



router.post('/', async (req, res) => {
    await API.login(process.env.EMAIL, process.env.PASSWORD)
    const playerArr = req.body
    const scoreArr = []
    for (item of playerArr) {
        scoreArr.push({
            username: item,
            data: await API.MWBattleData(item)
        });
    }

    const coddata = Object.values(scoreArr).map(obj => {
        const brall = obj.data.br_all
        // console.log(obj)
        return {
            player: obj.username,
            start_kills: brall.kills,
            start_deaths: brall.deaths,
            start_downs: brall.downs,
            start_revives: brall.revives 
        }

    })
    const mongoobj = {
        players: coddata,
        expiration: new Date()
    }
    const dataArr = [];
    Match.create(mongoobj, (err, data) => {
        // console.log("ayo data check", data._id);
        // const newObj = {
        //     players: coddata,
        //     expiration: mongoobj.expiration,
        //     _id: data._id
        // }
        console.log("\n ayo mongoobj check =========================================================================================================================\n")
        console.log (data)
        console.log("\n ayo mongoobj check =========================================================================================================================\n")
        res.json(data);
    })
})

router.get("/get/:id", (req, res) => {
    console.log("req.body check", req.params.id)
    Match.findById(req.params.id, (err, data) => {
        console.log("Get check: ", data);
        res.json(data)
    })
})



// gets back all
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
// submits post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
// specfic post
router.put('/:matchId', async ({ params, body }, res) => {
    const game = await Match.findById(params.matchId);
    await API.login(process.env.EMAIL, process.env.PASSWORD)
    const playerArr = game.players.map(p => p.player)
    const scoreArr = []
    for (item of playerArr) {
        scoreArr.push({
            username: item,
            data: await API.MWBattleData(item)
        });
    }
    // res.json(scoreArr)

    //prep loop for mongodb

    Object.values(scoreArr).map((obj, i) => {
        const brall = obj.data.br_all
        // const ps = game.players
        // console.log(obj)
        game.players[i].kills = Math.abs(game.players[i].start_kills - brall.kills)
        game.players[i].deaths = Math.abs(game.players[i].start_deaths - brall.deaths) 
        game.players[i].downs = Math.abs(game.players[i].start_downs - brall.downs)
        game.players[i].revives = Math.abs(game.players[i].start_revives - brall.revives)
        game.players[i].points = game.players[i].revives + game.players[i].kills + game.players[i].downs - game.players[i].deaths
    })
     const updateResponse = await Match.findByIdAndUpdate(params.matchId,{$set:{ "players": game.players }},{overwrite:true})
    res.json(updateResponse)
});

// Delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({
            _id: req.params.postId
        })
        res.json(removedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Update Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                title: req.body.title
            }
        });
        res.json(updatedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
module.exports = router;