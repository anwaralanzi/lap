import express from "express";
import  {register,
    login,getAllUsers,AdminH,userH
} from "../Controler/login.regeser";
import { authorize, protect } from "../middlwehre/protect";
import validate from "../middlwehre/validate3";
import { registerSchema, loginSchema } from "../zodschima/zodSchema";

const router = express.Router();

router.post("/reg", validate(registerSchema), register);
router.get("/:id", login);
router.get("/", getAllUsers);
router.get('/user', protect, authorize('USER', 'ADMIN'), userH);
router.get('/Admin', protect, authorize('ADMIN'), AdminH);


export default router;