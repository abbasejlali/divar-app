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

export { type ContactFormData, type AdsType };
