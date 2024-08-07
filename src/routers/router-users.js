const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");
const middlewareUsers = require("../middlewares/users-middlewares");

router.post(
    "/users",
    middlewareUsers.insertUserMiddleware,
    usersController.createUser
);

router.get(
    "/users/:id",
    middlewareUsers.getUserByIdMiddleware,
    usersController.getUserById
);

router.delete(
    "/users/:id",
    middlewareUsers.deleteUserMiddleware,
    usersController.deleteUser
);

module.exports = router;