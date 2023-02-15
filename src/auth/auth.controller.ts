import { Router } from "express";
import { signin, signup } from "./auth.service";


const authRouter = Router()

authRouter.post('/auth/signup', async (req, res, _next) => {
    res.send(await signup(req.body));
})

authRouter.post('/auth/signin', async (req, res, _next) => {
    res.send(await signin(req.body));
})

export { authRouter };

