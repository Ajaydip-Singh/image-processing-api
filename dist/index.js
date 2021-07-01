"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var path_1 = __importDefault(require("path"));
// Initialize server
var app = express_1.default();
// Set a port
var port = 3000;
app.use("/api", index_1.default);
app.get("/api", function (req, res) {
    var readmePath = path_1.default.resolve(__dirname, "../README.md");
    res.sendFile(readmePath);
});
app.listen(port, function () {
    console.log("server started at localhost:" + port);
});
exports.default = app;
