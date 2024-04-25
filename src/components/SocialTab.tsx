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
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { Label } from "./ui/label";

const email = "kenson.hui22@gmail.com";

function openInNewTab(url: string) {
  if (window) {
    window.open(url, "_blank").focus();
  }
}

const SocialTab = () => {
  const { setTheme } = useTheme();
  const { toast } = useToast();
  return (
    <div className="flex mt-3 pl-5 ">
      <div className="flex space-x-3 ">
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
      <div className="flex items-center space-x-2 left-auto ml-auto">
        <Switch
          id="light-mode"
          className=""
          onCheckedChange={(checked) =>
            checked ? setTheme("light") : setTheme("dark")
          }
        />
        <Label htmlFor="light-mode" className="cursor-pointer">
          Light Mode
        </Label>
      </div>
    </div>
  );
};

export default SocialTab;
