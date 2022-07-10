const userCtrl = require("../controllers/userCtrl");
const router = require('express').Router();

router.route('/')
    .get(userCtrl.getUsers)
    .post(userCtrl.insertUsers)
module.exports = router;