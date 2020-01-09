'use strict';
const mongoose = require('mongoose'),
    todoModel = mongoose.model('todos');

/**
 * Returns an array of to-do object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    return todoModel.find(params).exec();
};

/**
 * Saves and returns the new to-do object.
 *
 * @param {Object} todo {todo object}
 */
exports.save = function (todo) {
    const newTodo = new todoModel(todo);
    return newTodo.save();
};

/**
 * Returns the to-do object matching the id.
 *
 * @param {string} todoId {Id of the to-do object}
 */
exports.get = function (todoId) {
    return todoModel.findById(todoId).exec()
};

/**
 * Updates and returns the to-do object.
 *
 * @param {Object} todo {todo object}
 */
exports.update = function (todo) {
    todo.modified_date = new Date();
    return todoModel.findOneAndUpdate({_id: todo._id}, todo).exec();
};

/**
 * Deletes the to-do object matching the id.
 *
 * @param {string} todoId {Id of the to-do object}
 */
exports.delete = function (todoId) {
    return todoModel.remove({_id: todoId});
};