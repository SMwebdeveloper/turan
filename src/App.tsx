import { Outlet, useLocation } from "react-router-dom";
import { DarkModeProvider } from "./context/darkmodeContext";
import { AdminHeader, Footer, Header } from "./components";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);
  const adminHeaderFooter =
    [
      "/admin",
      "/admin/auth/login",
      "/admin/settings/results",
      "/admin/settings/teachers",
      "/admin/settings/records",
      "/admin/settings/statistics",
      "/admin/examens/add-questions",
      "/admin/examens/check-results",
      "/admin/settings/add-results",
      "/admin/settings/add-teachers",
    ].includes(location.pathname) ||
    /^\/admin\/settings\/edit-teacher\/\d+$/.test(location.pathname);

  return (
    <DarkModeProvider>
      {adminHeaderFooter ? (
        <>
          {location.pathname !== "/admin/auth/login" && <AdminHeader />}{" "}
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
