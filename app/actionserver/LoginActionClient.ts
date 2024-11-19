"use server";

import { cookies } from "next/headers";

interface ContactFormData {
  phone: string;
  code: string;
}

async function LoginActionClient(data: ContactFormData) {
  console.log("Form data received:", data);
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URI;
  const mobile = data?.phone;
  const { phone, code } = data;
  if (phone && !code) {
    try {
      const res = await fetch(`${BaseUrl}/auth/send-otp`, {
        method: "POST",
        body: JSON.stringify({ mobile }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      return { success: true, message: "کد یکبار مصرف برای شما ارسال شد" };
    } catch (err) {
      console.log(err);
      return { success: false, message: "متاسغانه مشکلی پیش آمده است" };
    }
  } else if (phone && code) {
    try {
      const res = await fetch(`${BaseUrl}/auth/check-otp`, {
        method: "POST",
        body: JSON.stringify({ mobile, code }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      const { accessToken, refreshToken } = data;
      if (accessToken && refreshToken) {
        cookies().set({
          name: "accessToken",
          value: accessToken,
          httpOnly: true,
          maxAge: 5 * 60 * 1000, // 5 min
        });
        cookies().set({
          name: "refreshToken",
          value: refreshToken,
          httpOnly: true,
          maxAge: 48 * 60 * 60 * 1000, // 48 h
        });
      }
      return { success: true, message: "با موفقیت وارد سایت شدید" };
    } catch (err) {
      console.log(err);
      return { success: false, message: "متاسغانه مشکلی پیش آمده است" };
    }
  }
}

export default LoginActionClient;
