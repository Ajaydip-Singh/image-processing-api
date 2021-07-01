export class ParameterValidator {
  validateString(parameter: string | null, parameterName = "Value"): void {
    if (!parameter) {
      throw new Error(`${parameterName} is null. Expected a string.`);
    } else if (typeof parameter !== "string") {
      throw new Error(`${parameterName} is not a string. Expected a string.`);
    }
  }

  validatePositiveInteger(
    parameter: number | null | string,
    parameterName = "Value"
  ): void {
    if (!parameter) {
      throw new Error(
        `${parameterName} is not a number. Expected a positive integer.`
      );
    } else if (typeof parameter !== "number") {
      throw new Error(
        `${parameterName} is not a number. Expected a positive integer.`
      );
    } else if (parameter <= 0) {
      throw new Error(
        `${parameterName} is zero or less than zero. Expected a positive integer.`
      );
    }
  }
}
