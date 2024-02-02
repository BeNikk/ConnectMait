"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserPost_1 = require("../models/UserPost");
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
cloudinary_1.v2.config({
    cloud_name: 'dr1vasczt',
    api_key: '536431137576568',
    api_secret: 'V0fDwbALdXWQJ-GyBQC4oilvUJw',
    secure: true,
});
function handlePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const postContent = req.body.postContent;
            const image = req.file;
            const userId = req.headers.userId;
            if (!userId) {
                res.json({ message: "Unauthorized" });
            }
            if (!image && !postContent) {
                res.json({ message: "nothing to add" });
            }
            if (image && postContent) {
                const result = yield cloudinary_1.v2.uploader.upload(image.path, {
                    resource_type: 'auto',
                });
                if (!result || !result.secure_url) {
                    return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
                }
                const newPost = new UserPost_1.postModel({ postContent, image: result.secure_url, userId
                });
                yield newPost.save();
                fs_1.default.unlinkSync(image.path);
                return res.status(201).json({ message: 'Post successfully created' });
            }
            if (!image && postContent) {
                const newPost = new UserPost_1.postModel({ postContent, userId });
                yield newPost.save();
                res.json({ message: "text-only post created successfully" });
            }
            if (!postContent && image) {
                const result = yield cloudinary_1.v2.uploader.upload(image.path, {
                    resource_type: 'auto',
                });
                if (!result || !result.secure_url) {
                    return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
                }
                const newPost = new UserPost_1.postModel({ image: result.secure_url, userId });
                yield newPost.save();
                res.json({ message: "image only post created successfully" });
            }
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.default = handlePost;
