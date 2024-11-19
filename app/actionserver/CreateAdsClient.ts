"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// type script
import { AdsType } from "@/typescript/interface";

async function CreateAdsClient(formData: AdsType | FormData) {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URI;
  const accesstoken = cookies().get("accessToken");

  if (formData && accesstoken) {
    try {
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accesstoken.value}`,
      };

      let body: BodyInit;

      if (formData instanceof FormData) {
        body = formData;
      } else {
        body = JSON.stringify(formData);
        headers["Content-Type"] = "application/json";
      }

      const res = await fetch(`${baseurl}/post/create`, {
        method: "POST",
        body,
        headers,
      });
      const data = await res.json();
      if (res?.status === 200) revalidatePath("/dashboard/add-ads");
      return { success: true, data };
    } catch (err) {
      console.log(err);
      return { success: false, error: err };
    }
  }
}

export default CreateAdsClient;
