"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleSignup_1 = __importDefault(require("../controllers/handleSignup"));
const handleSignin_1 = __importDefault(require("../controllers/handleSignin"));
const userAuth_1 = __importDefault(require("../middlewares/userAuth"));
const getUser_1 = __importDefault(require("../controllers/getUser"));
const getOtherUser_1 = __importDefault(require("../controllers/getOtherUser"));
const handleEditUser_1 = __importDefault(require("../controllers/handleEditUser"));
const router = express_1.default.Router();
router.post('/signup', handleSignup_1.default);
router.post('/signin', handleSignin_1.default);
router.get('/user', userAuth_1.default, getUser_1.default);
router.get('/user/:otherUserId', getOtherUser_1.default);
router.put('/editprofile', userAuth_1.default, handleEditUser_1.default);
exports.default = router;
