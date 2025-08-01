const { body } = require("express-validator");

const createTaskValidator = [
  body("title", "The title cannot be empty").notEmpty(),
  body("title", "The title must be a string").isString(),
  body("title", "The title must be a string").isLength({ max: 100 }),
  body("title").trim(),
  body("dueDate", "dueDate needs to be a valid ISO8601 string")
    .notEmpty()
    .isISO8601(),
  body(
    "description",
    "The description cannot be empty and needs to be a string"
  )
    .notEmpty()
    .isString()
    .trim(),
  body("description", "The description cannot be more than 500 chars").isLength(
    { max: 500 }
  ),
  body("priority").isIn(["low", "normal", "high"]),
  body("status").isIn(["todo", "inProgress", "completed"]),
];

module.exports = createTaskValidator;
