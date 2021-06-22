"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
/*
Resize image based on input parameters.
By default the image is resized based on
the cover option and position center.
*/
var resizeImage = function (inputImagePath, outputImagePath, width, height, resizeOption, position) {
    if (resizeOption === void 0) { resizeOption = "cover"; }
    if (position === void 0) { position = "centre"; }
    sharp_1.default(inputImagePath)
        .resize(width, height, {
        fit: resizeOption,
        position: position,
    })
        .toFile(outputImagePath, function (err) {
        console.log(err);
    });
};
exports.default = resizeImage;
