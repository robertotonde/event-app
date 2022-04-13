const express = require("express");

const router = express.Router();

const {
  create,
  read,
  update,
  linkDelete,
  links,
  viewCount,
  like,
  unlike,
} = require("../controllers/Link");

const { requireSignin } = require("../controllers/auth");

router.post("/create", requireSignin, create);
router.post("/read", read);
router.post("/update", requireSignin, update);
router.delete("/link-delete/:linkId ", requireSignin, linkDelete);
router.put("/view-count/:linkId", viewCount);
router.put("/like", requireSignin, like);
router.put("/unlike", requireSignin, unlike);

router.get("/links", links);

module.exports = router;
