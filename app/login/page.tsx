import LoginPage from "@/app/components/template/LoginPage";
import ValidationUserServer from "../actionserver/ValidationUserServer";
import { permanentRedirect } from "next/navigation";
import LayoutPage from "../components/layout/LayoutPage";

async function Login() {
  const data = await ValidationUserServer();

  if (data?.success) permanentRedirect("/");

  return (
    <LayoutPage>
      <LoginPage />
    </LayoutPage>
  );
}

export default Login;
