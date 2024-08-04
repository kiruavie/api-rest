import { Router } from "express";
import { getUserById, getUsers } from "../handlers/users";

const router = Router();


// /api/users;
router.get("/", getUsers);

// api/users/123
router.get("/:id", getUserById);

export default router;