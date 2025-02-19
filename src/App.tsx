import { Outlet, useLocation } from "react-router-dom";
import { DarkModeProvider } from "./context/darkmodeContext";
import {
  AdminHeader,
  Footer,
  Header,
  LeftSidebar,
  RightSidebar,
} from "./components";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);
  // const hideAdminHeaderFooter = ['/admin'].includes(location.pathname)
  console.log(location);

  useEffect(() => {}, []);
  return (
    <DarkModeProvider>
      {location.pathname === "/admin" ? (
        <>
          <AdminHeader />
          <LeftSidebar />
          <RightSidebar />
          <Outlet />
        </>
      ) : (
        <>
          {!hideHeaderFooter && <Header />}
          <Outlet />
          {!hideHeaderFooter && <Footer />}
        </>
      )}
    </DarkModeProvider>
  );
};

export default App;
