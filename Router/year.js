const router = require('express').Router()
const yearCtrl = require('../Controller/yearCtrl')

router.route('/year')
    .get(yearCtrl.getYear)


module.exports = router