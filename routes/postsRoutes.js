const express = require('express');
const router = express.Router();
const{index} = require("../controller/postscontroller");

router.get("/", index);

module.export = router;