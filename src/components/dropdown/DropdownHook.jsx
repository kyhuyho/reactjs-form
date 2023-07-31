import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide.jsx";

const DropdownHook = ({ name, control, setValue, data, dropdownLabel }) => {
  const [label, setLabel] = useState(dropdownLabel);
  const { show, setShow, nodeRef } = useClickOutSide();
  const jobValue = useWatch({
    control,
    name,
    defaultValue: "",
  });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };
  useEffect(() => {
    if (jobValue === "") setLabel(dropdownLabel);
  }, [jobValue]);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-500 bg-white cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      {show && (
        <div className="absolute top-full left-0 w-full rounded-lg bg-white">
          {data.length > 0 &&
            data.map((item) => (
              <div
                key={item.id}
                className="p-5 cursor-pointer hover:bg-gray-200"
                onClick={handleClickDropdownItem}
                data-value={item.value}
              >
                {item.text}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropdownHook;
