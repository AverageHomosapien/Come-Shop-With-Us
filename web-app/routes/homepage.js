const { Router } = require("express");
const router = Router();

const { getArtworks } = require("../controllers/homepage");

router.get("/getartworks/:keyword", getArtworks);

export default router;
//module.exports = router;
