"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryStringChecker = void 0;
/* Middleware Function to check if url paramaters exist
 * in the request. Takes an array of strings as input
 * and sends status 400 if any of the parameters are missing
 */
var queryStringChecker = function (fields) {
    return function (req, res, next) {
        var fails = [];
        fields.forEach(function (field) {
            if (!req.query[field]) {
                fails.push(field);
            }
        });
        if (fails.length > 0) {
            res
                .status(400)
                .send(fails.join(", ") + " " + (fails.length > 1 ? "are" : "is") + " missing in query string.");
            return;
        }
        next();
    };
};
exports.queryStringChecker = queryStringChecker;
