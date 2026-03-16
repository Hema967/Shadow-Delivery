import type { NextFunction, Request, Response } from "express";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const message = err instanceof Error ? err.message : "Unexpected error";

  if (!res.headersSent) {
    res.status(500).json({
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message,
      },
    });
  }
}

