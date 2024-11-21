import { MyAdsType } from "@/typescript/interface";
import LayoutPage from "../layout/LayoutPage";
import CardDashboard from "../module/CardDashboard";

function AdvertisementsPage({ data }: { data: MyAdsType[] }) {
  return (
    <LayoutPage>
      <div className="my-14 w-full flex justify-between items-start gap-10  flex-wrap  ">
        {data?.length > 0 &&
          data.map((item: MyAdsType) => (
            <CardDashboard key={item._id} data={item} />
          ))}
      </div>
    </LayoutPage>
  );
}

export default AdvertisementsPage;
