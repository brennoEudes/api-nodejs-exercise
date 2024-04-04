const { Router } = require("express");
const UsersController = require("../controllers/usersController");

const userRoute = Router();
const usersController = new UsersController();

userRoute.post("/", usersController.create);

module.exports = userRoute;
