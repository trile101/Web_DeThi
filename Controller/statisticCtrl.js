const data = require('../Model/statistic')

const StatisticCtrl = {
    getStatistic: async(req, res) => {
        try{
            const _data = await data.find();
            res.json(_data)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
module.exports = StatisticCtrl