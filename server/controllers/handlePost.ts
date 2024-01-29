import express, { Request, Response } from 'express';
import { postModel } from '../models/UserPost';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const app = express();
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


cloudinary.v2.config({
  cloud_name: 'dr1vasczt',
  api_key: '536431137576568',
  api_secret: 'V0fDwbALdXWQJ-GyBQC4oilvUJw',
  secure: true,
});
export default async function handlePost(req: Request, res: Response) {
  try {
    const postContent = req.body.postContent;
    const images = req.files as Express.Multer.File[];

    const userId = req.headers.userId;

    if (!postContent || !userId) {
      return res.status(400).json({ message: 'Missing post content or user ID' });
    }

    const uploadedImages = await Promise.all(
      images.map(async (image) => {
        try {
          const result = await cloudinary.uploader.upload(image.buffer.toString('base64'), {
            resource_type: 'auto',
          });

          if (result) {
            return {
              url: result.secure_url,
              contentType: result.format,
            };
          } else {
            throw new Error('Error uploading image to Cloudinary');
          }
        } catch (error) {
          console.error(error);
          throw new Error('Error uploading image to Cloudinary');
        }
      })
    );

    const newPost = new postModel({ postContent, userId, images: uploadedImages });
    await newPost.save();

    return res.status(201).json({ message: 'Post successfully created' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
