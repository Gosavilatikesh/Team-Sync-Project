import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const TopNav = () => {
  let dispatch = useDispatch();

  let { mode } = useSelector((store) => store.theme);

  let handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center rounded w-[30%]  px-3 py-2 bg-[var(--bg-surface)] border border-gray-700">
        <Search size={23} />
        <input
          className="outline-0 w-full"
          type="text"
          placeholder="Search workspace"
        />
      </div>
      <div className="flex gap-4">
        {mode === "light" ? (
          <Moon onClick={handleThemeChange} size={23}/>
        ) : (
          <Lightbulb onClick={handleThemeChange} size={23} />
        )}

        <Bell size={23} />
        <Menu size={23} />
      </div>
    </div>
  );
};

export default TopNav;
