"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://nikhilbhatt:nikhilbhatt@cluster0.a4hdcfb.mongodb.net/MaitConnect").then(() => {
    console.log("Mongo Db connected successfully");
}).catch((e) => { console.log("error connecting mongodb", e); });
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});
exports.UserModel = mongoose_1.default.model('User', userSchema);
