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
const UserSignin_1 = require("../models/UserSignin");
function getOtherUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const otherUsername = req.params.otherUserName;
        try {
            const user = yield UserSignin_1.UserModel.findOne({ username: otherUsername });
            if (!user) {
                res.json({ message: "user not found" });
            }
            else {
                res.json({ username: user.username, email: user.email, about: user.about });
            }
        }
        catch (e) {
            res.json({ message: "some error", error: e });
        }
    });
}
exports.default = getOtherUser;
