"use client";
import React from "react";

interface IconButtonprops {
  Icon: React.ElementType;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonprops> = ({ Icon, onClick }) => {
  return (
    <Icon className="cursor-pointer" width="24" height="24" onClick={onClick} />
  );
};

export default IconButton;
