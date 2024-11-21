interface ContactFormData {
  phone: string;
  code: string;
}
interface AdsType {
  title: string;
  content: string;
  category: string;
  city: string;
  amount: number;
  images: FileList;
}

interface AdvertisementType {
  _id: string;
  userId: string;
  amount: number;
  category: string;
  coordinate: [null, null];
  images: [string];
  options: {
    title: string;
    content: string;
    city: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  parents: [];
  children: [];
}
export {
  type ContactFormData,
  type AdsType,
  type AdvertisementType,
  type CategoryType,
};
