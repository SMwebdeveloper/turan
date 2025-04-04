import { useEffect, useState } from "react";
import { useLoginMutation } from "../../../service/admin";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    status: false,
    text: "",
  });
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      try {
        const response = await login(userData).unwrap();
        if (response.status == 401) {
        }

        if (response.access) {
          sessionStorage.setItem("token", response.access);
          navigate("/admin");
        }
      } catch (error) {
        setValidate({
          status: true,
          text: "Foydalanuvchi topilmadi",
        });
        setTimeout(() => setValidate({ status: false, text: "" }), 3000);
      }
    } else {
      setValidate({
        status: true,
        text: "Malumotlarni kiriting",
      });
      setTimeout(() => setValidate({ status: false, text: "" }), 3000);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/admin");
    }
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#1e063a]">
      <form
        onSubmit={handleSubmit}
        className="w-[672px] px-[18px] py-[30px] bg-colorDark shadow-md rounded-[30px]"
      >
        <h4 className="text-[64px] text-center text-white mb-6">
          Tizimga kirish
        </h4>

        <input
          type="email"
          value={userData.email}
          onChange={(e: any) =>
            setUserData((prev: any) => ({ ...prev, email: e.target.value }))
          }
          className="w-full py-7 px-4 rounded-[10px] text-white text-xl placeholder:text-xl placeholder:text-white/50 bg-[rgba(217,217,217,0.2)] border border-yellowColor outline-none mb-6"
          placeholder="Email"
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e: any) =>
            setUserData((prev: any) => ({ ...prev, password: e.target.value }))
          }
          className="w-full py-7 px-4 rounded-[10px] text-white text-xl placeholder:text-xl placeholder:text-white/50 bg-[rgba(217,217,217,0.2)] border border-yellowColor outline-none mb-6"
          placeholder="Parolni kiriting"
        />
        {validate.status && (
          <h2 className="text-center text-red-500 font-bold text-3xl mb-4">
            {validate.text}
          </h2>
        )}
        <button className="w-full h-[90px] py-[20px] rounded-[10px] bg-yellowColor text-[32px] font-bold text-white text-center">
          {isLoading ? "Loading..." : "Kirish"}{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
