import React from "react";
import "./styleRadioHook.css";
import { useController } from "react-hook-form";

const RadioHook = ({ name, control, ...props }) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <label className="cursor-pointer custom-radio">
      <input type="radio" {...field} {...props} className="hidden" />
      <div className="bg-white w-full h-full rounded-full"></div>
    </label>
  );
};

export default RadioHook;
