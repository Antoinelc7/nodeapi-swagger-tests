module.exports = (server) => {
const commentController = require("../controllers/commentController");

/**
 * @swagger
 * /posts/{post_id}/comments:
 *   get:
 *     summary: List all comments for a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: post_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 * 
 *   post:
 *     summary: Create a comment for a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: post_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - comment
 *             properties:
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment created successfully
 *       400:
 *         description: Invalid data
 *       500:
 *         description: Server error
 * 
 * /comments/{comment_id}:
 *   get:
 *     summary: Get a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: comment_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 * 
 *   put:
 *     summary: Update a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: comment_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - comment
 *             properties:
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       400:
 *         description: Invalid data
 *       500:
 *         description: Server error
 */

server.route("/posts/:post_id/comments")
    .get(commentController.listAllComments)
    .post(commentController.createAComment);

server.route("/comments/:comment_id") // req.params.comment_id
    .get(commentController.getAComment)
    .put(commentController.updateAComment);
    // .delete(commentController.deleteAComment);
}