const router = require('express').Router()
const statisticCtrl = require('../Controller/statisticCtrl')

router.route('/statistic')
    .get(statisticCtrl.getStatistic)


module.exports = router