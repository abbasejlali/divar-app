import { MyAdsType } from "@/typescript/interface";
import AdvertisementsPage from "../components/template/AdvertisementsPage";

async function Advertisements() {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URI;
  const res = await fetch(`${baseurl}`, {
    cache: "no-store",
  });
  const { posts }: { posts: MyAdsType[] } = await res.json();

  return <AdvertisementsPage data={posts} />;
}

export default Advertisements;
