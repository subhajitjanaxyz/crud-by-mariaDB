import {userModel} from "../models/usermodel.js";
export const userController = {
  createUser: async (req, res) => {
    try {
      const userData = req.body;
      console.log(userData);
      await userModel.createUser(userData);
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userModel.getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const userData = req.body;
      await userModel.updateUser(userId, userData);
      res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      console.log(userId)
      await userModel.deleteUser(userId);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
    getAllUsers: async (req, res) => {
        try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
        } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal server error" });
        }
    }  
};