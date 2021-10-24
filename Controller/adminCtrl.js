const adminCtrl = {
    getAdmin: async(req, res) => {
        try {
            const {Email, Pass} = req.body
            if (Email === "admin113@gmail.com" && Pass === "xinchao113") {
                res.send("true")
            } else {
                res.send("false")
            }
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
module.exports = adminCtrl