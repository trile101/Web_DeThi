const router = require('express').Router()
const fileCtrl = require('../Controller/fileCtrl')


router.route('/uploadFile')
    .post(fileCtrl.UploadFile)


router.route('/download:Id')
    .get(fileCtrl.DownloadFile)

router.route('/files/:_id')
    .get(fileCtrl.ConvertFile)


module.exports = router