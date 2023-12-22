import express from "express";
import userController from "../controller/user-controller.js";

export const publicRouter = new express.Router()
publicRouter.post("/api/users", userController.register())