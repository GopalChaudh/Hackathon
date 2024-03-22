import { Router, Request, Response } from "express";
import postModel from "../../DB/models/posts";
import UserModel from "../../DB/models/user";

const route = Router();

route.get('/one/:id', async (req: Request, res: Response) => {
    try {
        const Post = await postModel.findById(req.params.id);

        if (!Post) {
            res.status(404).send({
                status: 404,
                message: 'Post Not found'
            });
        } else {
            res.status(200).send({
                status: 200,
                message: Post
            });
        }
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: 'Server error'
        });
    }
});

route.post('/create/:userName', async (req: Request, res: Response) => {
    const userName = req.params.userName;

    const { author, image, title, description, link } = req.body;
    try {
        const newPost = new postModel({
            author,
            image,
            title,
            description,
            link
        });

        const savedPost = await newPost.save();

        const user = await UserModel.findOneAndUpdate(
            { userName },
            { $push: { posts: savedPost._id } },
            { new: true }
        );

        if (!user) {
            return res.status(404).send({
                status: 404,
                message: 'User Not found'
            });
        }

        res.status(201).send({
            status: 201,
            message: 'Post created successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: 500,
            message: 'Server error'
        });
    }
});

export default route;
