const router = require("express").Router();
const db = require ("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const { User } = require("../../models");

// Matches with "/api/user"
router.get("/", (req, res) => {
  db.User.find((err, users) => {
    res.send(users);
    console.log(users);
  })
});

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);
    const user = { username: req.body.username, password: hashedPassword }
    db.User.create(user).then(dbModel => res.json(dbModel))
  } catch {
    res.status(201).send()
  }
});

router.post("/login", (req, res) => {
  db.User.findOne({ username: req.body.username }, async (err, user) => {
    if (await bcrypt.compare(req.body.password, user.password)) {
      console.log("Success!");
      const token = jwt.sign({ id: user._id }, "test");
      // console.log(token);
      console.log("test123: " + user.username);
      res.json({
        token: token,
        user: {
          id: user._id,
          username: user.username
        }
      });
    } else {
        console.log("Failure");
    }
  });
});


router.post("/tokenIsVaid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if(!token) return res.json(false);
    
    const verified = jwt.verify(token, "test");
    if (!verified) return res.json(false);

    const user = await db.User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router;
