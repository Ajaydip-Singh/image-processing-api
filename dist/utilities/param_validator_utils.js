"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterValidator = void 0;
var ParameterValidator = /** @class */ (function () {
    function ParameterValidator() {
    }
    ParameterValidator.prototype.validateString = function (parameter, parameterName) {
        if (parameterName === void 0) { parameterName = "Value"; }
        var errorMessage = parameterName + " is not valid. Expected a string";
        if (!parameter) {
            throw new Error(errorMessage);
        }
        else if (typeof parameter !== "string") {
            throw new Error(errorMessage);
        }
    };
    ParameterValidator.prototype.validatePositiveInteger = function (parameter, parameterName) {
        if (parameterName === void 0) { parameterName = "Value"; }
        var errorMessage = parameterName + " is not valid. Expected a positive integer";
        if (!parameter) {
            throw new Error(errorMessage);
        }
        else if (typeof parameter !== "number") {
            throw new Error(errorMessage);
        }
        else if (parameter <= 0) {
            throw new Error(errorMessage);
        }
    };
    return ParameterValidator;
}());
exports.ParameterValidator = ParameterValidator;
