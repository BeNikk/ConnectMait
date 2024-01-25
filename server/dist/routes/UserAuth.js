"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleSignup_1 = __importDefault(require("../controllers/handleSignup"));
const handleSignin_1 = __importDefault(require("../controllers/handleSignin"));
const router = express_1.default.Router();
router.post('/signup', handleSignup_1.default);
router.post('/signin', handleSignin_1.default);
exports.default = router;
