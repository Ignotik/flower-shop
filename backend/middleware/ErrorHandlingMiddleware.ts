import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";

export default function ErrorHandlingMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, status: err.status });
  }
  return res
    .status(500)
    .json({ message: "Internal server error", status: 500 });
}
