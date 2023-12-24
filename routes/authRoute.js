import express from 'express'
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//create a seprate router object
const router = express.Router();

//routing listed
//Register Router and Method is POST
router.post("/register", registerController)

//Login Router and Method is POST
router.post("/login",loginController)

//testing perpose router
router.get("/test",requireSignIn,isAdmin,testController)

//protected route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
});

export default router;