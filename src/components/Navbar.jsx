import React, { useEffect, useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import logo from "../assets/images/logo.jfif";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleDownloadLogo = () => {
    const logoElement = document.getElementById("downloadLogo");
    html2canvas(logoElement, {
      backgroundColor: "transparent",
    })
      .then((canvas) => {
        const url = canvas.toDataURL("image/png");
        const date = new Date();
        const imgName = `LogoMaker_${date.toDateString().split(" ").join("_")}__${date.toLocaleTimeString().replaceAll(":", "_").split(" ").join("_")}.png`;
        const anchorTag = document.createElement("a");
        anchorTag.href = url;
        anchorTag.download = imgName;
        anchorTag.click();
      })
      .catch((error) => console.log(error));
  };

  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("home");
    } else {
      setActiveTab(location.pathname.replace("/", ""));
    }
  }, []);

  return (
    <div className="flex h-[72px] items-center justify-between bg-orange-300 p-5 py-4 shadow-md">
      <div
        onClick={handleLogoClick}
        className="flex cursor-pointer items-center justify-center gap-3"
      >
        <img className="size-10 rounded-lg" src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-painting-icon-with-flat-style-png-image_9009735.png" alt="Logo" />
        <h1 className="text-xl font-bold text-pretty">LogoMaker</h1>
      </div>

      <nav className="flex items-center gap-8">
        <ul className="hidden items-center gap-5 md:flex">
          <li>
            {/* <Link
              onClick={() => setActiveTab("home")}
              className={`font-medium transition-colors hover:text-blue-500 ${activeTab === "home" ? "text-blue-500" : " text-gray-600"}`}
              to="/"
            >
              Home
            </Link> */}
          </li>
          <li>
           
          </li>
          {/* <li>
            <Link
              className="font-medium text-gray-600 transition-colors hover:text-gray-800"
              to="/contact"
            >
              Contact
            </Link>
          </li> */}
        </ul>

        <button
          onClick={handleDownloadLogo}
          className="flex items-center gap-2 rounded-lg bg-white p-2 px-4 font-semibold text-black transition-colors hover:bg-yellow-300 "
        >
          <ArrowDownToLine className="size-5" /> Download
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
