import { Router } from "express";
import {userController} from "../controller/usercontroller.js";
 const userRoutes = Router();
userRoutes.get("/", userController.getAllUsers);
userRoutes.post("/", userController.createUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);
export default userRoutes;
