"use client";
import React from "react";
import IconButton from "./IconButton";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { useToast } from "./ui/use-toast";

const email = "kenson.hui22@gmail.com";

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
          });
        }}
      />
      <IconButton Icon={LinkedInLogoIcon} onClick={() => {}} />
      <GitHubLogoIcon className="cursor-pointer" width="24" height="24" />
    </div>
  );
};

export default SocialTab;
