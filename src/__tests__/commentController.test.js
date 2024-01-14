const CommentController = require('../api/controllers/commentController');
const Comment = require('../api/models/commentModel');

beforeEach(() => {
    jest.mock('../api/models/commentModel');
});

describe('CommentController', () => {
    test('Should list all comments', async () => {
        jest.spyOn(Comment, 'find').mockImplementation((query, callback) => {
            callback(null, [
                {
                    post_id: 'postId1',
                    message: 'message1',
                },
                {
                    post_id: 'postId2',
                    message: 'message2',
                },
            ]);
        });

        const req = {
            params: {
                post_id: 'postId1',
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await CommentController.listAllComments(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            {
                post_id: 'postId1',
                message: 'message1',
            },
            {
                post_id: 'postId2',
                message: 'message2',
            },
        ]);
    });
});