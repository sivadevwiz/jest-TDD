const { it, expect, describe } = require("@jest/globals");
const TodoController = require("../../controllers/todo.controller");

describe("TodoController.create", () => {
    it("should have a create TODO function", () => {
        expect(typeof TodoController.createTodo).toBe("function");
    })
});