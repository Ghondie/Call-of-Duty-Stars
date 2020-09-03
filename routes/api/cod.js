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
        console.log("ayo data check", data._id);
        const newObj = {
            players: coddata,
            expiration: mongoobj.expiration,
            _id: data._id
        }
        console.log("ayo mongoobj check", newObj)
        res.json(newObj);
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
        const ps = game.players
        // console.log(obj)
        ps[i].kills = Math.abs(ps[i].start_kills - brall.kills)
        ps[i].deaths = Math.abs(ps[i].start_deaths - brall.deaths)
        ps[i].downs = Math.abs(ps[i].start_downs - brall.downs)
        ps[i].revives = Math.abs(ps[i].start_revives - brall.revives)
    })
    Match.findByIdAndUpdate(params.matchId, { "players": game.players })
    res.send("updatedMatch")
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