import express from "express";
import  {register,
    login,getAllUsers
} from "../Controler/login.regeser";
import validate from "../middlwehre/validate3";
import { registerSchema, loginSchema } from "../zodschima/zodSchema";

const router = express.Router();

router.post("/", validate(registerSchema), register);
router.get("/:id", login);
router.put("/:id", validate(loginSchema), login);
router.get("/", getAllUsers);

export default router;