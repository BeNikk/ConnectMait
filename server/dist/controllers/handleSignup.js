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
const express_1 = __importDefault(require("express"));
const UserSignin_1 = require("../models/UserSignin");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const Secret = 'mysdcwdfr';
function handleSignup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password } = req.body;
            const existingUser = yield UserSignin_1.UserModel.findOne({ "email": email });
            if (existingUser) {
                res.json({ "message": "user already exists" });
            }
            const user = new UserSignin_1.UserModel({ username, email, password, about: "" });
            const savedUser = yield user.save();
            const payload = { userId: savedUser._id };
            const token = jsonwebtoken_1.default.sign(payload, Secret, { expiresIn: '24h' });
            res.json({ "messsge": "user created", "user": savedUser, "token": token });
        }
        catch (error) {
            res.json({ "some error occured": error });
        }
    });
}
exports.default = handleSignup;
