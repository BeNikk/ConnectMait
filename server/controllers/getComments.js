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
Object.defineProperty(exports, "__esModule", { value: true });
const UserPost_1 = require("../models/UserPost");
const UserSignin_1 = require("../models/UserSignin");
function getComments(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const postId = req.params.postId;
            const post = yield UserPost_1.postModel.findById(postId).populate("comments.postedBy");
            if (!post) {
                res.end("no posts");
            }
            else {
                const commentsWithUser = yield Promise.all(post.comments.map((comment) => __awaiter(this, void 0, void 0, function* () {
                    const user = yield UserSignin_1.UserModel.findById(comment.postedBy);
                    return {
                        text: comment.text,
                        postedBy: user ? { _id: user._id, username: user.username } : null,
                    };
                })));
                res.json(commentsWithUser);
            }
        }
        catch (e) {
            res.sendStatus(401);
        }
    });
}
exports.default = getComments;
