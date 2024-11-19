import MyAdsPage from "@/app/components/template/MyAdsPage";
import { MyAdsType } from "@/typescript/interface";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function MyAds() {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URI;
  const accesstoken = cookies().get("accessToken");

  if (accesstoken) {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${accesstoken.value}`,
    };
    const res = await fetch(`${baseurl}/post/my`, {
      cache: "no-store",
      headers,
    });
    const { posts }: { posts: MyAdsType[] } = await res.json();

    return <MyAdsPage data={posts} />;
  }

  redirect("/");
}

export default MyAds;
