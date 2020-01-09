'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for to-do object.
 */
let todoSchema = new Schema({
    /**
     * Title of the to-do item.
     */
    title: {
        type: String,
        required: "title is required"
    },
    /**
     * Status of the to-do item.
     */
    status: {
        type: String,
        required: "status is required"
    },
    /**
     *  to-do item created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /**
     * Last modified date.
     */
    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
todoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
todoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todos', todoSchema);