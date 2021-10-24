const subj = require('../Model/subject')
const file = require('../Model/file')

const SubjectCtrl = {
    getSubject: async(req, res) => {
        try{
            const sub = await subj.find();
            res.json(sub)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getDethi: async(req, res) => {
        try{
            const _subject = req.params.sub
            // get du lieu tu mongodb
            const _data = await file.find({subject:_subject, active:true}, {subject: 1, year: 1})

            res.send(_data)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUnActiveFile: async(req, res) => {
        try{
            // get du lieu tu mongodb
            const _data = await file.find({active:false}, {subject: 1, year: 1})

            res.send(_data)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = SubjectCtrl