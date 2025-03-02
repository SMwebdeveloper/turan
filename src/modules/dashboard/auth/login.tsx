import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form className="w-[672px] px-[18px] py-[30px] bg-colorDark shadow-md rounded-[30px]">
        <h4 className="text-[64px] text-center text-white mb-6">
          Tizimga kirish
        </h4>

        <input
          type="email"
          className="w-full py-7 px-4 rounded-[10px] text-white text-xl placeholder:text-xl placeholder:text-white/50 bg-[rgba(217,217,217,0.2)] border border-yellowColor outline-none mb-6"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full py-7 px-4 rounded-[10px] text-white text-xl placeholder:text-xl placeholder:text-white/50 bg-[rgba(217,217,217,0.2)] border border-yellowColor outline-none mb-6"
          placeholder="Parolni kiriting"
        />

        <button className='w-full py-[20px] rounded-[10px] bg-yellowColor text-[32px] font-bold text-white text-center'>Kirish</button>
      </form>
    </div>
  );
}

export default Login