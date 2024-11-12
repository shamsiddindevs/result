import React from "react";

const Navbar = () => {
  return (
    <header className="bg-transparent min-h-[70px]   flex items-center  " >
      <div className="flex items-center w-full max-w-[1200px] mx-auto px-5 gap-10">
        <div className="text-3xl text-white font-bold">Hanyuban</div>
        <ul className="flex items-center ml-auto gap-20 ">
          <li>
            <a className="text-white font-semibold text-[18px] hover:text-[#69b1ff]" href="#">Programma</a>
          </li>
          <li>
            <a className="text-white font-semibold text-[18px] hover:text-[#69b1ff]"  href="#">Tariflar</a>
          </li>
          <li>
            <button
              className="px-[15px] w-[165px] flex justify-center items-center font-semibold h-[45px] rounded-[10px] text-white  text-[18px] cursor-pointer transition-all uppercase"
              style={{
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.3) ",
                backgroundImage:
                  "linear-gradient(rgb(164, 232, 105) 0%, rgb(90, 175, 16) 100%)",
              }}>
              Login
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
