import {
  BiHomeAlt,
  BiPaperPlane,
  BiCreditCard,
  BiLogOut,
  // BiSearch,
  BiBell,
} from "react-icons/bi";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";
import logo from "../../assets/img/tello.png";
import "../../assets/styles/dash.css";
import { Avatar, Popover } from "@mui/material";
import DashHome from "./home";
import DashLinks from "./links";
import DashPages from "./pages";
import DashSettings from "./settings";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMoralis } from "react-moralis";

const Dash = () => {
  const [isOpen, close] = useState(false);
  const [isOpen3, close3] = useState(false);
  const { page } = useParams();
  const { user, isAuthenticated, logout } = useMoralis();

  const toggle = () => {
    close(!isOpen);

    setTimeout(() => {
      close3(!isOpen3);
    }, 900);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotes = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const notesClose = () => {
    setAnchorEl(null);
  };

  const nopen = Boolean(anchorEl);
  const id = nopen ? "Your Notifications" : undefined;

  const active = "border-l-[3px] border-l-[#3DB5E6] text-[#3DB5E6]";
  return (
    <div className="h-full  dash w-full bg-[#F9FAFF] flex">
      <div
        className={`sidebar transition-all z-[100] delay-500 ${
          isOpen
            ? "min-w-[250px] dsm:absolute w-[250px]"
            : `w-[75px]  min-w-[75px] ${isOpen3 ? "dsm:absolute" : "relative"}`
        } bg-white border-solid border-r-[1px] border-r-[#E3E3E3] h-[inherit]`}
      >
        <div
          className={`w-full ${
            isOpen ? "py-[1.32rem]" : "py-[1rem]"
          } border-solid innerSide border-b-[1px] flex justify-center transition-all delay-500 items-center relative`}
        >
          <NavLink to="/" className="flex items-center justify-center">
            <img
              src={logo}
              alt="tello"
              width={isOpen ? 30 : 40}
              className={`mr-[5px] min-w-[${
                isOpen ? 30 : 40
              }px] transition-all delay-500`}
            />
            <span
              className={
                isOpen3
                  ? "text-black text-2xl font-bold"
                  : "transition-all delay-500 hidden"
              }
            >
              TELLO
            </span>
            {/* <img
              src={logo1}
              className={isOpen3 ? "" : "transition-all delay-500 hidden"}
              alt="tello"
            /> */}
          </NavLink>
          {isOpen3 ? (
            <IoIosArrowDropleftCircle
              onClick={toggle}
              className={`transition-all cursor-pointer delay-500 text-[#3DB5E6] absolute right-[-15px] m-auto z-50 top-0 bottom-0`}
              size={30}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                height: "30px",
                width: "30px",
              }}
            />
          ) : (
            <IoIosArrowDroprightCircle
              onClick={toggle}
              className={`transition-all cursor-pointer delay-500 text-[#3DB5E6] absolute right-[-15px] m-auto z-50 top-0 bottom-0`}
              size={30}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                height: "30px",
                width: "30px",
              }}
            />
          )}
        </div>

        <div
          className={`flex innerSide transition-all delay-500 flex-col py-3 ${
            isOpen ? "px-[27px]" : "px-[1px]"
          } justify-center`}
        >
          <div className={`pb-3 mb-1 border-b-[#E3E3E3] border-b-[1px]`}>
            <div
              className={`rounded-[4px] overflow-hidden flex-nowrap transition-all delay-500 hover:border-l-[#f89e8e] hover:text-[#3DB5E6] hover:bg-[#F5F8FE] border-solid ${
                page === "home" || page === undefined ? active : ""
              } transition-all delay-500 bg-[#F5F8FE] py-[9px]`}
            >
              <NavLink
                to="/dashboard"
                className="text-inherit flex items-center text-[14px]"
              >
                <BiHomeAlt
                  size={isOpen3 ? 16.5 : 21}
                  className={`text-inherit transition-all delay-500 ${
                    isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                  } mx-[22.5px]`}
                />{" "}
                {isOpen3 ? "Dashboard" : ""}
              </NavLink>
            </div>
          </div>

          <div
            className={`rounded-[4px] overflow-hidden flex-nowrap my-1 ${
              (page === "userpages" || page === "pages" || page === "page") !==
              -1
                ? active
                : ""
            } border-solid hover:border-l-[3px] border-l-transparent text-[#A9A9A9] hover:border-l-[#3DB5E6] hover:text-[#3DB5E6] hover:bg-[#F5F8FE] py-[9px]`}
          >
            <NavLink
              to="/dashboard/pages"
              className="text-inherit flex items-center text-[14px]"
            >
              <BiPaperPlane
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500 ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[22.5px]`}
              />{" "}
              {isOpen3 ? "Your Pages" : ""}
            </NavLink>
          </div>

          <div
            className={`rounded-[4px] overflow-hidden flex-nowrap my-1 border-solid hover:border-l-[3px] hover:border-l-[#3DB5E6] border-l-transparent text-[#A9A9A9] hover:text-[#3DB5E6] hover:bg-[#F5F8FE] py-[9px] ${
              (page === "links" || page === "link") !== -1 ? active : ""
            }`}
          >
            <NavLink
              to="/dashboard/links"
              className="text-inherit flex items-center text-[14px]"
            >
              <BiCreditCard
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500  ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[22.5px]`}
              />{" "}
              {isOpen3 ? "Payment Links" : ""}
            </NavLink>
          </div>

          <div
            className={`rounded-[4px] overflow-hidden flex-nowrap my-1 border-solid hover:border-l-[3px] hover:border-l-[#3DB5E6] hover:text-[#3DB5E6] border-l-transparent text-[#A9A9A9] hover:bg-[#F5F8FE] py-[9px] ${
              (page === "settings" || page === "setting") !== -1 ? active : ""
            }`}
          >
            <NavLink
              to="/dashboard/settings"
              className="text-inherit flex items-center text-[14px]"
            >
              <RiSettingsLine
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500  ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[22.5px]`}
              />{" "}
              {isOpen3 ? "Settings" : ""}
            </NavLink>
          </div>

          <div className="rounded-[4px] overflow-hidden flex-nowrap my-1 border-solid hover:border-l-[3px] hover:border-l-[#3DB5E6] border-l-transparent text-[#A9A9A9] hover:text-[#3DB5E6] hover:bg-[#F5F8FE] py-[9px]">
            <div
              className="text-inherit flex items-center text-[14px]"
              onClick={async () => {
                if (isAuthenticated) {
                  logout();
                }
                <Navigate to="/" />;
              }}
            >
              <BiLogOut
                size={isOpen3 ? 16.5 : 21}
                className={`text-inherit transition-all delay-500 ${
                  isOpen3 ? "min-w-[16.5px]" : "min-w-[21px]"
                } mx-[22.5px]`}
              />{" "}
              {isOpen3 ? "Log Out" : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="body w-full h-full">
        <div className="flex px-[20px] py-[13px] justify-between items-center border-solid border-b-[1px] 3md:border-b-transparent bg-white border-b-[#E3E3E3]">
          <div className="">
            <h1 className="font-bold">Welcome {user.get("username")}!???</h1>
            <span>Hope you are healthy and happy today..</span>
          </div>
          <div className="flex items-center">
            {/* <form
              className="relative min-w-[260px] mr-[10px] flex items-center"
              method="get"
              action=""
            >
              <BiSearch
                className="absolute left-[9px]"
                color="#626262"
                size={22}
              />
              <input
                className="rounded-lg border p-2 w-full pl-[35px] focus:outline-none focus:shadow-outline-blue text-[#A9A9A9] placeholder-[#A9A9A9]"
                placeholder="Search..."
                type="search"
                name="username"
              />
            </form> */}

            <div className="h-full w-[20px] mx-2">
              <BiBell
                size={23}
                aria-describedby={id}
                onClick={handleNotes}
                className="cursor-pointer"
                color="#000"
              />
              <Popover
                id={id}
                open={nopen}
                anchorEl={anchorEl}
                onClose={notesClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                Continue Your Plan Here
              </Popover>
            </div>

            <Avatar sx={{ bgcolor: "#3DB5E6" }} alt={user.get("username")}>
              {user.get("username").charAt(0).toUpperCase()}
            </Avatar>
          </div>
        </div>

        {(page === "settings" || page === "setting") && <DashSettings />}

        {(page === "home" || page === undefined) && <DashHome />}

        {(page === "links" || page === "link") && <DashLinks />}

        {(page === "userpages" || page === "pages" || page === "page") && (
          <DashPages />
        )}

        {page !== undefined &&
          ![
            "settings",
            "setting",
            "home",
            "links",
            "link",
            "userpages",
            "pages",
            "page",
          ].includes(page) && <Navigate to="/404" />}
      </div>
    </div>
  );
};

export default Dash;
