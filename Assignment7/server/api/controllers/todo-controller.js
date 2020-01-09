'use strict';
//import to-do service.
const todoService = require('../services/todo-service');

/**
 * Returns a list of to-do items in JSON based on the
 * search parameters.
 *
 * @param request
 * @param response
 */
exports.list = function (request, response) {
    const resolve = (todos) => {
        response.status(200);
        response.json(todos);
    };
    todoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new to-do item with the request JSON and
 * returns to-do item JSON object.
 *
 * @param request
 * @param response
 */
exports.post = function (request, response) {
    const newTodo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.save(newTodo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a to-do object in JSON.
 *
 * @param request
 * @param response
 */
exports.get = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.get(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a to-do object in JSON.
 *
 * @param request
 * @param response
 */
exports.put = function (request, response) {
    const todo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todo._id = request.params.todoId;
    todoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a to-do object.
 *
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json({
            message: 'Todo item Successfully deleted'
        });
    };
    todoService.delete(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    return (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    };
};