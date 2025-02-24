import { Outlet, useLocation } from "react-router-dom";
import { DarkModeProvider } from "./context/darkmodeContext";
import { AdminHeader, Footer, Header } from "./components";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);
  const adminHeaderFooter = [
    "/admin",
    "/admin/settings/results",
    "/admin/settings/teachers",
    "/admin/settings/records",
    "/admin/settings/about",
    "/admin/examens/add-questions",
    "/admin/examens/check-results",
    "/admin/settings/add-results",
  ].includes(location.pathname);

  return (
    <DarkModeProvider>
      {adminHeaderFooter ? (
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
