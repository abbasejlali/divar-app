import RefreshTokenValidatServer from "@/app/actionserver/RefreshTokenValidatClient";
import HomePage from "@/components/template/HomePage";
import { cookies } from "next/headers";

export default async function Home() {
  return <HomePage />;
}
