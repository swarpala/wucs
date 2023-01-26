import { getUsers, insertUsers } from "../controllers/userCtrl";
const router = require('express').Router();

router.route('/')
    .get(getUsers)
    .post(insertUsers)
export default router;