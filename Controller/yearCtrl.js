const year = require('../Model/year')

const yearCtrl = {
    getYear: async(req, res) => {
        try{
            const _year = await year.find()
            res.json(_year)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = yearCtrl