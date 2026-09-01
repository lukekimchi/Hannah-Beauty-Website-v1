import { NavLink } from "react-router-dom";
import Notice from "./Notice";
import { academy } from "../constants/notice";

const Navbar = () => {
  return (
    <div className="stick-to-top">
      <Notice title={academy.title} text={academy.text} />
      <div className="flex w-screen h-24 lg:h-16 justify-center bg-primary border-b border-gray-500">
        <nav className="flex w-[70%] justify-between items-center text-black uppercase">
          <NavLink to="/">
            <p className="nav-link">home</p>
          </NavLink>
          <NavLink to="/services">
            <p className="nav-link">services</p>
          </NavLink>
          <NavLink to="/academy">
            <p className="nav-link">academy</p>
          </NavLink>
          <a href="https://blog.hannahbeauty.co.nz" target="_blank" rel="noopener noreferrer">
            <p className="nav-link">blog</p>
          </a>

          {/* 예약 섹션 전용 경로. 스크롤은 HomePage 가 처리한다.
              (예전에는 여기서 직접 스크롤했는데, 홈이 아닌 페이지에서는
               #book 요소가 없어 오류가 났다.) */}
          <NavLink to="/book">
            <p className="text-white hover:bg-red-800 clickable bg-accent shadow-lg font-medium text-lg px-6 py-2">book
            </p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
