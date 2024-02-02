"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const UserAuth_1 = __importDefault(require("./routes/UserAuth"));
const Post_1 = __importDefault(require("./routes/Post"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', UserAuth_1.default);
app.use('/', Post_1.default);
app.listen(PORT, () => {
    console.log(`server running on port ${[PORT]}`);
});
