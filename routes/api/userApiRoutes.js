const router = require('express').Router();
const userApiController = require('../../controllers/api/userApiController');

// Matches with "/api/users/"
router.route('/')
  .get(userApiController.findAll)
  .post(userApiController.create);

// Matches with "/api/users/:id"
router.route('/:id')
  .get(userApiController.findById)
  .put(userApiController.update)
  .delete(userApiController.remove);

module.exports = router;