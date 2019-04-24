const { Router } = require("express");

const {
  getBounties,
  getBountyById,
  postBounty,
  editBounty,
  deleteBounty
} = require("../controllers/bountyControllers");

const router = Router();

router
  .route("/")
  .get(getBounties)
  .post(postBounty);

router
  .route("/:_id")
  .get(getBountyById)
  .put(editBounty)
  .delete(deleteBounty);

module.exports = router;
