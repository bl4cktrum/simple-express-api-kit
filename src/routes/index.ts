import express from "express";
import {userRouter} from "./user";
import {teamRouter} from "./team";
import {taskRouter} from "./task";
import {authRouter} from "./auth";

export const router = express.Router();

router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/team',teamRouter)
router.use('/task',taskRouter)
