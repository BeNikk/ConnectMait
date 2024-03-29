"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userAuth_1 = __importDefault(require("../middlewares/userAuth"));
const handlePost_1 = __importDefault(require("../controllers/handlePost"));
const getPost_1 = __importDefault(require("../controllers/getPost"));
const getUser_1 = __importDefault(require("../controllers/getUser"));
const handleComment_1 = __importDefault(require("../controllers/handleComment"));
const getPostById_1 = __importDefault(require("../controllers/getPostById"));
const multer_1 = __importDefault(require("multer"));
const getComments_1 = __importDefault(require("../controllers/getComments"));
const getOtherUser_1 = __importDefault(require("../controllers/getOtherUser"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = require("cloudinary");
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: {
        folder: 'maitconnect', // Adjust the format as needed
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const router = express_1.default.Router();
router.post('/addPost', userAuth_1.default, upload.single('image'), handlePost_1.default);
router.post('/posts/comments/:postId', userAuth_1.default, handleComment_1.default);
router.get('/post', getPost_1.default);
router.get('/getuser', getUser_1.default);
router.get('/post/:id', getPostById_1.default);
router.get('/post/comment/:postId', getComments_1.default);
router.get('/otherProfile/:otherUserName', getOtherUser_1.default);
exports.default = router;
