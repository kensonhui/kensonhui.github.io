"use client";
import React from "react";
import IconButton from "./IconButton";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const email = "kenson.hui22@gmail.com";

function openInNewTab(url: string) {
  if (window) {
    window.open(url, "_blank").focus();
  }
}

const SocialTab = () => {
  const { toast } = useToast();
  return (
    <div className="flex mt-3 pl-5 space-x-3">
      <IconButton
        Icon={EnvelopeClosedIcon}
        onClick={() => {
          navigator.clipboard.writeText(email);
          toast({
            title: "Email copied!",
            description: `${email} has been saved to your clipboard.`,
            duration: 1000,
          });
        }}
      />
      <IconButton
        Icon={LinkedInLogoIcon}
        onClick={() => {
          openInNewTab("https://www.linkedin.com/in/kensonhui/");
        }}
      />
      <IconButton
        Icon={GitHubLogoIcon}
        onClick={() => {
          openInNewTab("https://github.com/kensonhui");
        }}
      />
    </div>
  );
};

export default SocialTab;
