import { NextResponse } from "next/server";

export function createServerResponse({
  message,
  body,
  status,
  headers,
}: {
  message: string;
  status: number;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}): NextResponse {
  return new NextResponse(
    JSON.stringify({
      message: message || "Message not provided",
      ...body,
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    }
  );
}
