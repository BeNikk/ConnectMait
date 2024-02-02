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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Secret = 'mysdcwdfr';
const UserSignin_1 = require("../models/UserSignin");
function handleSignin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = req.body;
        try {
            const user = yield UserSignin_1.UserModel.findOne({ $and: [{ "username": username }, { "password": password }] });
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            if (user) {
                const payload = { "userId": user._id };
                const token = jsonwebtoken_1.default.sign(payload, Secret, { expiresIn: '24h' });
                res.json({ "message": "user loggedIn", "token": token });
            }
        }
        catch (error) {
            res.json({ "message": "some error occured" });
        }
    });
}
exports.default = handleSignin;
