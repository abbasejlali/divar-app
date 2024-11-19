import LayoutDashboardPage from "../components/layout/LayoutDashboardPage";

function layout({ children }: { children: React.ReactNode }) {
  return <LayoutDashboardPage>{children}</LayoutDashboardPage>;
}

export default layout;
