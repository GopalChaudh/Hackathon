import { Router, Request, Response } from 'express';
import UserModel from '../../DB/models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {SECRET_TOKEN} from '../../index';
import loginHandler from './login';

function generateToken(userId: string): string {
    if (!SECRET_TOKEN) {
        throw new Error('User secret token not found');
    }
    const token = jwt.sign({ userId }, SECRET_TOKEN);
    return token;
}

async function generateHashedPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
    try {
        const { fullName, userName, email, password }: any = req.body;

        // Check if userName or email already exists in the database
        const existingUser = await UserModel.findOne({ $or: [{ userName }, { email }] });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: 'User with the same userName or email already exists!'
            });
        }

        // Generate hashed password
        const hashedPassword = await generateHashedPassword(password);

        // Create a new user document with the hashed password
        const user = new UserModel({
            fullName,
            userName,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await user.save();

        // Generate JWT token
        const userJwtToken = generateToken(user._id); // Assuming user has an _id field
        
        // Set JWT token as a cookie
        res.cookie('user-token', userJwtToken, {
            httpOnly: true
        });

        res.status(201).json({
            status: 201,
            message: "Data saved successfully"
        }); // 201 status for resource created
    } catch (error : any) {
        console.log('Error in RegisterHandler:', error);
        res.status(500).json({
            status: 500,
            message: error.message || "Internal server error"
        });
    }
});

router.post('/login', loginHandler);

export default router;
