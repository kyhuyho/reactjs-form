import React from "react";
import "./styleCheckboxHook.css";
import { useController } from "react-hook-form";

const CheckboxHook = ({ name, control, text, ...props }) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input type="checkbox" className="hidden" {...field} {...props} />
      <div className="flex items-center gap-x-3">
        <div className="bg-white rounded-md custom-checkbox-square flex items-center justify-center">
          <span className="opacity-0 invisible">
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7453 1.89733L3.93178 9.71087L0.254822 6.03391L1.17132 5.11741L3.93178 7.87137L10.8288 0.980835L11.7453 1.89733Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <span className="text-sm cursor-pointer">{text}</span>
      </div>
    </label>
  );
};

export default CheckboxHook;
