"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IconButtonProps {
  Icon: React.ElementType;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

const IconButton = ({ Icon, onClick, href, external }: IconButtonProps) => {
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.35 }}
      whileTap={onClick ? undefined : { scale: 0.95 }}
      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      <Icon className="h-6 w-6" />
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
      </Link>
    );
  }

  return <button onClick={onClick}>{buttonContent}</button>;
};

export default IconButton;
