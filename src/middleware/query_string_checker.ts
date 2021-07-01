import express from "express";

/* Middleware Function to check if url paramaters exist
 * in the request. Takes an array of strings as input
 * and sends status 400 if any of the parameters are missing
 */
export const queryStringChecker = (fields: string[]): express.Handler => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    const fails: string[] = [];
    fields.forEach((field) => {
      if (!req.query[field]) {
        fails.push(field);
      }
    });

    if (fails.length > 0) {
      res
        .status(400)
        .send(
          `${fails.join(", ")} ${
            fails.length > 1 ? "are" : "is"
          } missing in query string.`
        );
    }
    next();
  };
};
