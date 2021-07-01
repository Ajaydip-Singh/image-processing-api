export class ParameterValidator {
  validateString(parameter: string | null, parameterName = "Value"): void {
    const errorMessage = `${parameterName} is not valid. Expected a string`;

    if (!parameter) {
      throw new Error(errorMessage);
    } else if (typeof parameter !== "string") {
      throw new Error(errorMessage);
    }
  }

  validatePositiveInteger(
    parameter: number | null | string,
    parameterName = "Value"
  ): void {
    const errorMessage = `${parameterName} is not valid. Expected a positive integer`;

    if (!parameter) {
      throw new Error(errorMessage);
    } else if (typeof parameter !== "number") {
      throw new Error(errorMessage);
    } else if (parameter <= 0) {
      throw new Error(errorMessage);
    }
  }
}
