import { Outlet, useLocation } from "react-router-dom";
import { DarkModeProvider } from "./context/darkmodeContext";
import { AdminHeader, Footer, Header } from "./components";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <DarkModeProvider>
      {location.pathname === "/admin" ? (
        <>
          <AdminHeader />
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
