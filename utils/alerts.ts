import { toast } from "react-toastify";

const successAlert = (text: string) => toast.success(text);
const errorAlert = (text: string) => toast.success(text);

export { successAlert, errorAlert };
