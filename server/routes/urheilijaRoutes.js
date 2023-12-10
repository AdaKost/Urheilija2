const express = require("express");
const urheilijaControllers = require("../controllers/urheilijaControllers");
const router = express.Router();

// @route GET && POST - urheilijat urheilija-taulussa
router
  .route("/")
  .get(urheilijaControllers.getAllUrheilijat)
  .post(urheilijaControllers.createNewUrheilija)
  .put(urheilijaControllers.putUrheilijaById)
  .delete(urheilijaControllers.deleteUrheilijaById);

router.route("/:id").get(urheilijaControllers.getUrheilijaById);
router.route("/:id").put(urheilijaControllers.putUrheilijaById);
router.route("/:id").delete(urheilijaControllers.deleteUrheilijaById);

module.exports = router;
