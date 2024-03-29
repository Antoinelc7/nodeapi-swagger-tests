const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @swagger
 * definitions:
 *   Post:
 *     properties:
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       created_at:
 *         type: date
 */

let postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: 'Le contenu est requis'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);