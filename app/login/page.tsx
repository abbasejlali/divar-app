import LoginPage from "@/app/components/template/LoginPage";
import ValidationUserServer from "../actionserver/ValidationUserServer";
import { permanentRedirect } from "next/navigation";

async function Login() {
  const data = await ValidationUserServer();

  if (data?.success) permanentRedirect("/");

  return <LoginPage />;
}

export default Login;
