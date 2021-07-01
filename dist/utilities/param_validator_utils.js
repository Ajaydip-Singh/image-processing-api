"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterValidator = void 0;
var ParameterValidator = /** @class */ (function () {
    function ParameterValidator() {
    }
    ParameterValidator.prototype.validateString = function (parameter, parameterName) {
        if (parameterName === void 0) { parameterName = "Value"; }
        if (!parameter) {
            throw new Error(parameterName + " is null. Expected a string.");
        }
        else if (typeof parameter !== "string") {
            throw new Error(parameterName + " is not a string. Expected a string.");
        }
    };
    ParameterValidator.prototype.validatePositiveInteger = function (parameter, parameterName) {
        if (parameterName === void 0) { parameterName = "Value"; }
        if (!parameter) {
            throw new Error(parameterName + " is not a number. Expected a positive integer.");
        }
        else if (typeof parameter !== "number") {
            throw new Error(parameterName + " is not a number. Expected a positive integer.");
        }
        else if (parameter <= 0) {
            throw new Error(parameterName + " is zero or less than zero. Expected a positive integer.");
        }
    };
    return ParameterValidator;
}());
exports.ParameterValidator = ParameterValidator;
