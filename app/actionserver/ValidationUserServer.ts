import { cookies } from "next/headers";

const ValidationUserServer = async (): Promise<
  { success: boolean } | undefined
> => {
  "use server";
  const accessToken = cookies().get("accessToken");
  if (accessToken?.value) {
    return { success: true };
  } else {
    return { success: false };
  }
};

export default ValidationUserServer;
