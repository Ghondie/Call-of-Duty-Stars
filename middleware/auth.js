const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) 
            return res.status(401).json({ msg: "No auth token, auth denied" });
            
        const verified = jwt.verify(token, "test");
        if(!verified)
            return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        req.user = verified.indexOf;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
}

module.exports = auth;