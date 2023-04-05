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

    const user = await User.findOne({ username: req.body.username });
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!user || !isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" })
    }

    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET);

    res.cookie("token", token, { httpOnly: true});
    res.json({ message: "Login successful", usename: user.username});



    // try {
    //     const { username, password } = req.body;
    //     const user = await User.findOne({ username });
    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (!user || !isMatch) {
    //         return res.status(400).json({ message: "Invalid email or password" });
    //     }
    //     return res.status(200).json({ user });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({message: "Server error" });
    // }
});

router.get("/me", async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ username: user.username, email: user.email })
    .catch(error => {
        return res.status(401).json({message: "Unauthorized" });
    })
})

module.exports = router;