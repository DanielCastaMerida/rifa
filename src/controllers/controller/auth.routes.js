const { Router } = require('express');
const router = Router()
const authController = require("../../services/auth.controller")
const { authJwt, verifySignup, verifyValidation } = require("../../middlewares")

router.get('/signup', [ authJwt.isAuthenticatedAuth ], authController.renderSignUp)
router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted, verifyValidation.validateNewUser], authController.signup)

router.post('/update/signup', [verifySignup.checkDuplicateUsernameOrDocumento, verifySignup.checkRolesExisted, verifyValidation.validateUpdateNewUser], authController.updateSignup)

router.get("/logout",authController.logout)
module.exports = router;