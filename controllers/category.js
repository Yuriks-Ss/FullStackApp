const Category = require('../models/Category')
const errorHandler = require('../untils/errorHandler')

module.exports.getAll = async (req, res) => {
    try {

        const categories = await Category.find({user:req.user})
        if(req.user.email ==="admin@gmail.com"){
            const categories1 = await Category.find()
            res.status(200).json(categories1)
        }
        else if ({user:req.user.id}){

            res.status(200).json(categories)
        }
        else {
            res.status(444).json({
                massage:"error access"
            })
        }
        //res.status(200).json(categories)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.remove = async (req, res) => {
    try {
        await Category.remove({_id: req.params.id})
        res.status(200).json({
            message: 'category delete'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.create = async (req, res) => {
    const category = new Category({
        name: req.body.name,
        surname: req.body.surname,
        surnames: req.body.surnames,
        gender:req.body.gender,
        institute: req.body.institute,
        specialty: req.body.specialty,
        birthday: req.body.birthday,
        passport1: req.body.passport1,
        passportNumber: req.body.passportNumber,
        passportInfo: req.body.passportInfo,
        DPA: req.body.DPA,
        telephone: req.body.telephone,
        homeAddress: req.body.homeAddress,
        language: req.body.language,
        studentFor: req.body.studentFor,
        finances: req.body.finances,
        zaklad: req.body.zaklad,
        diplomInfo:req.body.diplomInfo,
        certificateY:req.body.certificateY,
        //date: req.body.date,
        wifeInfo: req.body.wifeInfo,
        fatherInfo: req.body.fatherInfo,
        matherInfo: req.body.matherInfo,
        addressParents: req.body.addressParents,
        army: req.body.army,
        armyInfo: req.body.armyInfo,
        armyInfo1: req.body.armyInfo1,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    })
    try {
        await category.save()
        res.status(201).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = async (req, res) => {
    const updated = {
        name: req.body.name,
        surname: req.body.surname,
        surnames: req.body.surnames,
        gender:req.body.gender,
        institute: req.body.institute,
        specialty: req.body.specialty,
        birthday: req.body.birthday,
        passport1: req.body.passport1,
        passportNumber: req.body.passportNumber,
        passportInfo: req.body.passportInfo,
        DPA: req.body.DPA,
        telephone: req.body.telephone,
        homeAddress: req.body.homeAddress,
        language: req.body.language,
        studentFor: req.body.studentFor,
        finances: req.body.finances,
        zaklad: req.body.zaklad,
        diplomInfo:req.body.diplomInfo,
        certificateY:req.body.certificateY,
        wifeInfo: req.body.wifeInfo,
        fatherInfo: req.body.fatherInfo,
        matherInfo: req.body.matherInfo,
        addressParents: req.body.addressParents,
        army: req.body.army,
        armyInfo: req.body.armyInfo,
        armyInfo1: req.body.armyInfo1,
        //user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    }
    if (req.file) {
        updated.imageSrc = req.file.path
    }
    try {
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }

}

