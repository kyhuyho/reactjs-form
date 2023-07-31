import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ name, control, ...props }) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <input
      className="p-4 border border-gray-500 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
      {...field}
      {...props}
    />
  );
};

export default InputHook;
