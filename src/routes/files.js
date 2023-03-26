const { getFiles } = require("../controllers/filesController");

//src/routes/files.js
const router = require("express").Router();
router
  .route("/files/data")
  // to retrieve resource
  .get(getFiles);

module.exports = router;
