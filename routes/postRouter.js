const postCtrl = require("../controllers/postCtrl");
const router = require('express').Router();

router.route('/')
    .get(postCtrl.getPosts)
    .post(postCtrl.insertPost)
module.exports = router;