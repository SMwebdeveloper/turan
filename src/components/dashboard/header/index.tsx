/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Logo from "../../../assets/logo.png";
import DarkLogo from "../../../assets/logo-border-black.png";
import Hamburger from "../../../assets/menu-burger-darker.png";
import Yellowburger from "../../../assets/menu-burger-yellow.png";
import Notification from "../../../assets/notification-dark.png";
import NotificationYellow from "../../../assets/notification-yellow.png";
import CheckLists from "../../../assets/task-checklist-darker.png";
import CheckListsYellow from "../../../assets/task-checklist-yellow.png";
import Arrow from "../../../assets/arrow.png";
import User from "../../../assets/teacher.png";
import CheckCircle from "../../../assets/check-circle.png";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const [openFirstSidebar, setOpenFirstSidebar] = useState(false);
  const [openSecondSidebar, setSecondSidebar] = useState(false);
  const [visibleSettingsLinks, setVisibleSettingsLinks] = useState(false);
  const [visibleExamensLinks, setVisibleExamensLinks] = useState(false);

  const settingsLinks = {
    title: "Sozlamalar",
    links: [
      {
        linkTitle: "Biz haqimizda",
        path: "/admin/settings/about",
      },
      {
        linkTitle: "Lavhalar",
        path: "/admin/settings/records",
      },
      {
        linkTitle: "Natijalar",
        path: "/admin/settings/results",
      },
      {
        linkTitle: "O'qituvchilar",
        path: "/admin/settings/teachers",
      },
    ],
  };
  const examensLinks = {
    title: "Imtihonlar",
    links: [
      {
        linkTitle: "Savollar qo'shish",
        path: "/admin/examens/add-questions",
      },
      {
        linkTitle: "Natijalar tekshirish",
        path: "/admin/examens/check-results",
      },
    ],
  };

  return (
    <div
      className="w-full pt-[61px] pb-4 sticky flex items-center top-0 left-0 bg-[#1e063a] 
       transition-colors duration-300 ease-in-out z-50"
    >
      <div className="container m-auto flex justify-between items-center">
        <div className="flex items-center gap-x-[50px]">
          <button
            onClick={() => setOpenFirstSidebar(true)}
            className="w-[63px] h-[63px] bg-yellowColor rounded-full flex items-center justify-center"
          >
            <img src={Hamburger} alt="burger menu" />
          </button>
          <Link to={"/admin"} className="w-[63px] h-[63px]">
            <img src={Logo} alt="site logo" />
          </Link>
        </div>
        <div className="flex items gap-x-[50px]">
          <button
            onClick={() => setSecondSidebar(true)}
            className="w-[63px] h-[63px] rounded-full bg-yellowColor flex items-center justify-center"
          >
            <img src={Notification} alt="notification img" />
          </button>
          <button className="w-[63px] h-[63px] rounded-full bg-yellowColor flex items-center justify-center">
            <img src={CheckLists} alt="checklist img" />
          </button>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={() => {
          setOpenFirstSidebar(false);
          setSecondSidebar(false);
        }}
        className={`fixed top-0 left-0 w-full h-full z-10 ${
          openFirstSidebar || openSecondSidebar ? "block" : "hidden"
        }`}
      ></div>
      {/* left sidebar */}
      <div
        className={`fixed left-0 top-0 w-[338px] h-full z-20 bg-yellowColor pt-[61px] pl-[11px] pr-[17px]  transition-all duration-200 ease-linear overflow-auto ${
          openFirstSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-start px-[24px] gap-x-[50px] mb-[85px]">
          <button
            onClick={() => setOpenFirstSidebar(false)}
            className="w-[63px] h-[63px] bg-colorDark rounded-full flex items-center justify-center"
          >
            <img src={Yellowburger} alt="burger yellow menu" />
          </button>
          <Link to={"/admin"} className="w-[63px] h-[63px]">
            <img src={DarkLogo} alt="site logo" />
          </Link>
        </div>{" "}
        <div className="w-full mb-4 relative">
          <button
            onClick={() => setVisibleSettingsLinks((prev) => !prev)}
            className="flex items-center justify-between w-full text-[32px] text-white pl-10 pr-4 py-4 bg-white/40 rounded-full mb-2 transition-all duration-300"
          >
            {settingsLinks.title}
            <span>
              <img
                src={Arrow}
                alt="arrow"
                className={`w-9 transition-transform duration-300 ${
                  visibleSettingsLinks ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
          </button>

          <ul
            className={`w-full transition-all duration-300 overflow-hidden ${
              visibleSettingsLinks
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {settingsLinks.links?.map((link, i) => (
              <li
                key={i}
                className="bg-white/25 text-center py-2 rounded-full mb-2 text-[28px] text-white transition-all duration-300"
              >
                <Link to={link.path}>{link.linkTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mb-[15px] relative">
          <button
            onClick={() => setVisibleExamensLinks((prev) => !prev)}
            className="flex items-center justify-between w-full text-[32px] text-white pl-[42px] pr-[14px] py-[14px] bg-[rgba(255,255,255,0.4)] rounded-full mb-[6px]"
          >
            {examensLinks.title}{" "}
            <span>
              <img
                src={Arrow}
                alt="arrow"
                className={`w-[37px] object-cover transition-all duration-200 ease-linear ${
                  visibleExamensLinks && "-rotate-180"
                }`}
              />
            </span>
          </button>

          <ul
            className={`w-full transition-all duration-300 overflow-hidden ${
              visibleExamensLinks ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {examensLinks.links?.map((link, i) => (
              <li
                key={i}
                className="bg-[rgba(255,255,255,0.25)] text-center py-[8px] rounded-full mb-[6px] text-[28px] text-white"
              >
                <Link to={link.path}>{link.linkTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* right sidebar */}
      <div
        className={`fixed right-0 top-0 w-[433px] h-full z-20 bg-yellowColor pt-[61px] pl-[11px] pr-[17px] transition-all duration-200 ease-linear ${
          openSecondSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end pr-[35px] gap-x-[50px] mb-[39px]">
          <button
            onClick={() => setSecondSidebar(true)}
            className="w-[63px] h-[63px] bg-colorDark rounded-full flex items-center justify-center"
          >
            <img src={NotificationYellow} alt="notification img" />
          </button>
          <button className="w-[63px] h-[63px] bg-colorDark rounded-full flex items-center justify-center">
            <img src={CheckListsYellow} alt="checklist img" />
          </button>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="w-full bg-[rgba(255,255,255,0.4)] p-2 pr-6 rounded-full flex items-center justify-between">
            <img
              src={User}
              alt="user image"
              className="rounded-full w-[70px] h-[70px] bg-yellowColor object-cover"
            />
            <div>
              <h5 className="text-[24px] leading-8 text-[rgba(30, 6, 58, 1)]">
                Muhriddin Ismoilov
              </h5>
              <p className="text-[#8c6c50] text-[20px] leading-7">
                02 minut oldi
              </p>
            </div>
            <img
              src={CheckCircle}
              alt="check circle"
              className="w-[35px] h-[35px]"
            />
          </div>
          <div className="w-full bg-[rgba(255,255,255,0.4)] p-2 pr-6 rounded-full flex items-center justify-between">
            <img
              src={User}
              alt="user image"
              className="rounded-full w-[70px] h-[70px] bg-yellowColor object-cover"
            />
            <div>
              <h5 className="text-[24px] leading-8 text-[rgba(30, 6, 58, 1)]">
                Muhriddin Ismoilov
              </h5>
              <p className="text-[#8c6c50] text-[20px] leading-7">
                02 minut oldi
              </p>
            </div>
            <h5 className="text-[24px] text-red-700">+5</h5>
          </div>
          <div className="w-full bg-[rgba(255,255,255,0.4)] p-2 pr-6 rounded-full flex items-center justify-between">
            <img
              src={User}
              alt="user image"
              className="rounded-full w-[70px] h-[70px] bg-yellowColor object-cover"
            />
            <div>
              <h5 className="text-[24px] leading-8 text-[rgba(30, 6, 58, 1)]">
                Muhriddin Ismoilov
              </h5>
              <p className="text-[#8c6c50] text-[20px] leading-7">
                02 minut oldi
              </p>
            </div>
            <h5 className="text-[24px] text-red-700">+7</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
