export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
  }

  static BadRequest(message: string) {
    return new ApiError(404, message);
  }

  static internal(message: string) {
    return new ApiError(500, message);
  }

  static Forbidden(message: string) {
    return new ApiError(403, message);
  }
}
