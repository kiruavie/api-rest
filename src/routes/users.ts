import { Router } from "express";
import { getUserById, getUsers, createUser } from "../handlers/users";

const router = Router();

// routes || GET method
// /api/users
router.get("/", getUsers);

// api/users/123
router.get("/:id", getUserById);

// routes || POST method

// create user
router.post("/create-user", createUser);

export default router;