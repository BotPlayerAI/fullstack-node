const express = require("express");
const authController = require("./auth.controller.js");
const { StatusCodes } = require("http-status-codes");
const loginValidator = require("./validators/login.validator.js");
const { validationResult } = require("express-validator");

const authRouter = express.Router();

/**
 * @swagger
 *
 * /auth/login:
 *  post:
 *    summary: User login
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Login"
 *    responses:
 *      200:
 *        description: User login successful
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 200
 *              message: Ok
 *              data:
 *                accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODcxNDZjZTJjNGE1N2E0YjYyYmJhY2QiLCJlbWFpbCI6ImpvaG5AZG9lLmNvbSIsImlhdCI6MTc1MjMzODQyOSwiZXhwIjoxNzUyNDI0ODI5fQ.f1LepFlFONCHNQFjkspmhg1UsTMPLp_J2B7VPde4ffQ
 */

authRouter.post("/login", loginValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return authController.handleLogin(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

authRouter.post("/login");

module.exports = authRouter;


/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: A valid email address
 *         password:
 *           type: string
 *           description: Must contain 8 characters and also a number, a capital letter and a special character
 *       example:
 *           email: john@doe.com
 *           password: Password123#
 * */