import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  import App from "../App";
import { Consultation, Courses, Exam, Home, Ielts, Login, Register } from "../modules";

  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/exam" element={<Exam/>} />
          <Route path="/consultation" element={<Consultation/>} />
          <Route path="/ielts" element={<Ielts/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
  };
  
  export default Index;
  