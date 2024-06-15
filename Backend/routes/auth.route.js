import express from "express.mjs";
import { login, logout, signup,getMe } from "../controllers/auth.controller.js";
const router = express.Router();
import { protectRoute } from "../middleware/protectRoute.js";
router.get("/me", protectRoute, getMe);


router.post("/signup",signup)

router.post("/login",login)
router.get("/logout",logout)
export default router

