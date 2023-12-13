import {Router} from "express"
import { createUser, createAdmin, getAllUsers, createVendor, createDispatcher, logOutUser, verifyUser, resetUserPassword, changeUserPassword, deleteUser } from "../controller/userController"
import { passwordValidator, registerValidator } from "../utils/userValidator";
import validator from "../utils/validator"
import { authorization } from "../utils/authorization";

const router: Router = Router();
router.route("/register-user").post(validator(registerValidator),createUser)
router.route("/create-admin").post(createAdmin)
router.route("/create-Vendor").post(createVendor)
router.route("/create-Dispatcher").post(createDispatcher)
router.route("/delete").delete(deleteUser)
router.route("/logout").get(logOutUser)
router.route("/verify-user").patch(verifyUser)
router.route("reset-user-password").patch(resetUserPassword)
router.route("/change-user-password/:userId").patch(validator(passwordValidator),changeUserPassword)
router.route("/getAll-users").get(authorization, getAllUsers)
router.route("/get-oneUser")
export default router

