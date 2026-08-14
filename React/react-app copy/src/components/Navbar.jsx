import { Home, Info, Contact2, Menu, X, LogIn, User2Icon, ServerIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  
  const navigate = useNavigate();

const { setOpenLogin, setOpenDropDown } = useAppContext();

const navLinks = [
  { name: "Home", to: "/", icon: <Home size={16} /> },
  { name: "About", to: "/about", icon: <Info size={16} /> },
  { name: "Contact", to: "/contact", icon: <Contact2 size={16} /> },
  { name: "Services", icon: <ServerIcon size={16} /> },
];

  return (
    <div className="max-w-full px-5 sm:px-20 py-7 sm:py-5 mx-auto bg-linear-120 from-slate-400 via-gray-300 to-gray-400 flex items-center justify-between">
      
      <h1
        onClick={() => navigate("/")}
        className="text-xl text-gray-100 sm:text-2xl font-medium tracking-wider cursor-pointer"
      >
        Hack<span className="italic text-green-400">Verse</span>
      </h1>

<nav className="hidden sm:flex space-x-10 text-sm font-light tracking-wider">
  {navLinks.map((item, index) =>
    item.name === "Services" ? (
      <div
        key={index}
        onClick={() => setOpenDropDown((prev) => !prev)}
        className="hover:text-pink-600 space-x-1 flex items-center transition duration-300 cursor-pointer"
      >
        <p>{item.icon}</p>
        <p>{item.name}</p>
        <ChevronDown size={16} />
      </div>
    ) : (
      <NavLink
        key={index}
        to={item.to}
        onClick={() => scrollTo(0, 0)}
        className="hover:text-pink-600 space-x-1 flex items-center transition duration-300"
      >
        <p>{item.icon}</p>
        <p>{item.name}</p>
      </NavLink>
    )
  )}
</nav>

      <div className="hidden sm:flex items-center space-x-3 text-sm font-light">
        <button onClick={() => setOpenLogin(true)} className="  items-center space-x-0.5 hover:text-pink-600 flex transition duration-300 cursor-pointer"><span className="tracking-wider">Login</span> <LogIn size={16} /></button>
        
      </div>

      <Menu size={20}
        onClick={() => setOpenSidebar(true)}
        className="sm:hidden text-sm cursor-pointer"
      />

      {openSidebar && (
        <div className="fixed inset-0 z-50 sm:hidden bg-white/80 backdrop-blur-sm">
          
          <X
            onClick={() => setOpenSidebar(false)}
            className="absolute right-7 top-8 cursor-pointer"
            size={30}
          />

          <div className="h-screen flex flex-col items-center justify-center space-y-6">
            
            <nav className="flex flex-col items-center space-y-4 text-lg font-light tracking-wide">
              {navLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  onClick={() => {
                    setOpenSidebar(false);
                    scrollTo(0, 0);
                  }}
                  className="hover:text-red-400 transition duration-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <button className="border px-8 py-2 rounded-full bg-green-400 text-black cursor-pointer">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;