"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postData = new mongoose_1.default.Schema({
    postContent: {
        type: String
    },
    image: {
        type: String,
    },
    likes: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
            text: String,
            postedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' }
        }],
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});
exports.postModel = mongoose_1.default.model('postModel', postData);
