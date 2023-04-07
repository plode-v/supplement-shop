const express = require("express")
const router = express.Router();
const User = require("../models/userModels")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

// Signup route
router.post("/signup", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword

    })
    user.save()
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

// Login route
router.post("/login", async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error" });
    }
});

module.exports = router;