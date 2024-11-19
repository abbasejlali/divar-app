"use server";
import { revalidatePath } from "next/cache";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

async function RefreshTokenValidatClient(): Promise<
  | {
      success: boolean;
      message: string;
    }
  | undefined
> {
  const refreshToken: RequestCookie | undefined = cookies().get("refreshToken");
  const accessToken: RequestCookie | undefined = cookies().get("accessToken");
  const baseurl = process.env.NEXT_PUBLIC_BASE_URI;
  if (accessToken && refreshToken) {
    return { success: true, message: "با موفقیت وارد شدید" };
  }
  if (!accessToken?.value && refreshToken?.value) {
    try {
      const res = await fetch(`${baseurl}/auth/check-refresh-token`, {
        method: "POST",
        body: JSON.stringify({ refreshToken: refreshToken.value }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data?.accessToken) {
        cookies().set("accessToken", data.accessToken, {
          httpOnly: true,
          path: "/",
          maxAge: 5 * 60 * 1000, // 5 min
        });
        cookies().set("refreshToken", data.refreshToken, {
          httpOnly: true,
          path: "/",
          maxAge: 48 * 60 * 60 * 1000, // 48 h
        });
      }
      revalidatePath("/");
      return {
        success: true,
        message: "new access token and new refresh token",
      };
    } catch (err) {
      console.log("errrrrrrrrrrrrrrrrrrror", err);
      return { success: false, message: "متاسفانه مشکلی پیش آنده است" };
    }
  }
}

export default RefreshTokenValidatClient;
