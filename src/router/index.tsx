import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import {
  Consultation,
  Courses,
  Exam,
  Home,
  Ielts,
  Login,
  Register,
  Dashboard,
  About,
  AddQuestions,
  CheckResults,
  Records,
  Results,
  Teachers,
  AddResults,
} from "../modules";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/ielts" element={<Ielts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/settings/about" element={<About />} />
          <Route path="/admin/settings/records" element={<Records />} />
          <Route path="/admin/settings/results" element={<Results />} />
          <Route path="/admin/settings/teachers" element={<Teachers />} />
          <Route path="/admin/settings/add-results" element={<AddResults />} />
          <Route
            path="/admin/examens/add-questions"
            element={<AddQuestions />}
          />
          <Route
            path="/admin/examens/check-results"
            element={<CheckResults />}
          />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
