const file = require('../Model/file')
const subject = require('../Model/subject')
const statistic = require('../Model/statistic')
const JSZIP = require('jszip')

const fileCtrl = {
    UploadFile: async(req, res) => {
        try{
            // xac dinh mon hoc (subject) co trong mongodb
            const subj = req.body.subject
            const _year = req.body.select

            const check = await subject.findOne({name:subj.toLowerCase()})
            // tao gia tri moi trong mongodb - subject
            if (check == null) {
                console.log(check)
                const newSubject = new subject({name:subj.toLowerCase()})
                await newSubject.save()
            }

            // check file gui 1: nhieu anh , 2: 1 file pdf hay word
            if (req.files['many-files'].length > 1) {
                // gui nhieu anh
                var _data = []
                let lenData = req.files['many-files'].length
                for (let i = 0; i < lenData; i++) {
                    _data.push(req.files['many-files'][i].data)
                }

                const newFile = new file({
                    subject: subj,
                    year: _year,
                    name: req.files['many-files'][0].name,
                    mimetype: req.files['many-files'][0].mimetype,
                    data: _data,
                    active: true
                })
                await newFile.save()
            } else {
                // handle data
                var _data = []
                _data.push(req.files['many-files'].data)

                const newFile = new file({
                    subject: subj,
                    year: _year,
                    name: req.files['many-files'].name,
                    mimetype: req.files['many-files'].mimetype,
                    data: _data,
                    active: true
                })
                await newFile.save()
            }
            res.send("Updated123!")
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    DownloadFile: async(req, res) => {
        try{
            // tang luot download
            const Id_download = "6158218b01da6b3825d54e60"
            const _da = await statistic.findById(Id_download)
            const _download = _da.download + 1
            await statistic.findByIdAndUpdate(Id_download, {'download': _download})


            // truy xuat du lieu trong database
            const _ID = req.params.Id
            const _data = await file.findById(_ID)

            // nen du lieu trong file zip
            const zip = new JSZIP()
            // tao foler chung de chua du lieu
            const nameFolder = _data.subject + "-" + _data.year
            const _folder = zip.folder(nameFolder)

            // xac dinh duoi cua file : pdf, png
            const _end = _data.mimetype.substr(_data.mimetype.search('/') + 1, _data.mimetype.length - _data.mimetype.search('/'))


            // nen du lieu vao tung file
            const len = _data.data.length;
            for (let i = 0; i < len; i++) {
                const nameFile = nameFolder + "-" + (i + 1).toString() + "." + _end
                _folder.file(nameFile, _data.data[i].buffer)
            }


            zip.generateAsync({type: "base64"}).then((base64) => {
                let zip = Buffer.from(base64, "base64")
                res.writeHead(200, {
                    "Content-Type": "application/zip",
                    "Content-disposition": `attachment; filename=DeThi.zip`,
                });
                res.end(zip);
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    ConvertFile: async(req, res) => {
        try{
            /// truy xuat du lieu trong database
            const _ID = req.params._id
            const data = await file.findById(_ID)

            res.json(data)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = fileCtrl