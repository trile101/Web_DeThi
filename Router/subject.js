const router = require('express').Router()
const subjectCtrl = require('../Controller/subjectCtrl')


router.route('/subject')
    .get(subjectCtrl.getSubject)

router.route('/subject/s/:sub')
    .get(subjectCtrl.getDethi)

router.route('/UnSubject')
     .get(subjectCtrl.getUnActiveFile)



module.exports = router