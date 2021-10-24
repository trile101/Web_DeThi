const router = require('express').Router()
// file control
const adminCtrl = require('../Controller/adminCtrl')

router.route('/admin')
    .post(adminCtrl.getAdmin)

module.exports = router