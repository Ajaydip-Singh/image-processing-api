"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterValidator = void 0;
var ParameterValidator = /** @class */ (function () {
    function ParameterValidator() {
    }
    ParameterValidator.prototype.validateString = function (parameter) {
        if (parameter == null) {
            throw new Error("Value is null. Expected a string.");
        }
        else if (typeof parameter !== "string") {
            throw new Error("Value is not a string. Expected a string.");
        }
    };
    ParameterValidator.prototype.validatePositiveInteger = function (parameter) {
        if (parameter == null) {
            throw new Error("Value is null. Expected a positive integer.");
        }
        else if (typeof parameter !== "number") {
            throw new Error("Value is not a number. Expected a positive integer.");
        }
        else if (parameter < 0) {
            throw new Error("Value is less than zero. Expected a positive integer.");
        }
    };
    return ParameterValidator;
}());
exports.ParameterValidator = ParameterValidator;
