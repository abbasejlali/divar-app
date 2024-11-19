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

interface MyAdsType {
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
export { type ContactFormData, type AdsType, type MyAdsType };
