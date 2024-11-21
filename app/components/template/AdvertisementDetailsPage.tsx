import { AdvertisementType } from "@/typescript/interface";
import LayoutPage from "../layout/LayoutPage";
import Image from "next/image";

function AdvertisementDetailsPage({ data }: { data: AdvertisementType }) {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URI;
  const {
    images,
    options: { title, content, city },
    amount,
  } = data;

  return (
    <LayoutPage>
      <div className="max-w-full w-full">
        <div className="flex w-full justify-center items-start my-14">
          <Image
            className="rounded-t-lg w-full max-w-2xl rounded-2xl shadow-2xl object-cover "
            src={`${baseurl}/${images[0]}`}
            alt={`${title}`}
            loading="lazy"
            height={400}
            width={672}
          />
        </div>
        <h2 className="text-4xl font-bold dark:text-white mb-4">{title}</h2>
        <p className=" text-lg text-gray-500 md:text-xl dark:text-gray-400 mb-10">
          {content}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            قیمت : {amount}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            شهر : {city}
          </span>
        </div>
      </div>
    </LayoutPage>
  );
}

export default AdvertisementDetailsPage;
