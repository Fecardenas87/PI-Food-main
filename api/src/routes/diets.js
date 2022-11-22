const { Router } = require("express");
const axios = require("axios");
const { getInfoDietsDB } = require("./functions");
const router = Router();

router.get("/", async (req, res) => {
    try {
        const infoApi = await getInfoDietsDB();
        res.status(200).send(infoApi);
    } catch (error) {
        res.status(404).json("Error in route get Diet", error);
    }
});

module.exports = router;