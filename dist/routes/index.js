"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_image_1 = __importDefault(require("./api/resize_image"));
var routes = express_1.default.Router();
routes.use("/resize-image", resize_image_1.default);
exports.default = routes;
