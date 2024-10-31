// src/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname !== "/notfound";

  return (
    <>
      {showHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
