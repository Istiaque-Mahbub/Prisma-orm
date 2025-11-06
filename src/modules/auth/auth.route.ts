

import express  from 'express';
import { AuthController } from './auth.controller';

const router = express.Router()

router.post("/login",AuthController.loginWithEmailAndPassword)
router.post("/withGoogle",AuthController.authWithGoogle)


export const AuthRoute = router