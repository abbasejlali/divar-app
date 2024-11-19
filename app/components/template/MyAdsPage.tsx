import { MyAdsType } from "@/typescript/interface";
import CardDashboard from "../module/CardDashboard";

function MyAdsPage({ data }: { data: MyAdsType[] | undefined }) {
  console.log("ASDASDASDASDSADKJ", data);
  return (
    <div className=" w-full flex justify-between items-start flex-wrap gap-8 ">
      {data?.map((post) => (
        <CardDashboard key={post._id} data={post} />
      ))}
    </div>
  );
}

export default MyAdsPage;
