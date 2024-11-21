import AdvertisementDetailsPage from "@/app/components/template/AdvertisementDetailsPage";
import { AdvertisementType } from "@/typescript/interface";

async function AdvertisementDetails({ params }: any) {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URI;

  const res = await fetch(`${baseurl}/post/${params?.adsId}`, {
    cache: "no-store",
  });

  const { post }: { post: AdvertisementType } = await res.json();

  return <AdvertisementDetailsPage data={post} />;
}

export default AdvertisementDetails;
