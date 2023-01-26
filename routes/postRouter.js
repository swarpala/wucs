import { getPosts, insertPost } from "../controllers/postCtrl";
const router = require('express').Router();

router.route('/')
    .get(getPosts)
    .post(insertPost)
export default router;