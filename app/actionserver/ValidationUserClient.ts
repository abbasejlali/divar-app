"use server";
import { cookies } from "next/headers";

const ValidationUserClient = async (): Promise<
  { success: boolean } | undefined
> => {
  const accessToken = cookies().get("accessToken");
  if (accessToken?.value) {
    return { success: true };
  } else {
    return { success: false };
  }
};

export default ValidationUserClient;
