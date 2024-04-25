"use client";
import React from "react";

interface IconButtonprops {
  Icon: React.ElementType;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonprops> = ({ Icon, onClick }) => {
  return (
    <Icon
      className="cursor-pointer dark:hover:to-blue-400 transition ease-in-out hover:-translate-y-1 hover:scale-150 duration-300"
      width="28"
      height="28"
      onClick={onClick}
    />
  );
};

export default IconButton;
