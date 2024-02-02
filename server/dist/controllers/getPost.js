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
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allposts = yield UserPost_1.postModel.find({}).sort({ createdAt: -1 }).populate('userId').limit(100);
            res.json(allposts);
        }
        catch (error) {
            res.json({ message: "some error occured" });
        }
    });
}
exports.default = getPost;
