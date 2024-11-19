import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  // Parse the request body if needed
  const { accessToken, refreshToken } = await request.json();

  // Create a response object
  const response = NextResponse.next();

  // Set cookies on the response
  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    path: "/",
    maxAge: 5 * 60 * 1000, // 5 min
  });

  response.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/",
    maxAge: 48 * 60 * 60 * 1000, // 48 h
  });

  // Return the response with cookies set
  return response;
}
