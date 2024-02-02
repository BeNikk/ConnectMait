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
const storage = multer_1.default.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './temp');
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
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
