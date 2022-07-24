const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../untils/errorHandler')

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        // check password
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // generate token
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })

        } else {
            res.status(401).json({
                message: 'password is not correct'
            })
        }
    } else {
        //error
        res.status(404).json({
            message: 'user with this email is not found'
        })
    }
}
module.exports.register = async (req, res) => {

    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        res.status(409).json({
            message: 'This email is already exist'
        })
    } else {
        const salt = bcrypt.genSaltSync(13)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            name: req.body.name,
            imageSrc: req.body.imageSrc
        })
        try {
            await user.save()
            res.status(201).json(user)

        } catch (e) {
            // error save
            errorHandler(res, e)

        }
    }
}