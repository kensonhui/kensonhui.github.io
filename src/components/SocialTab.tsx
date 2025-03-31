"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useToast } from "./ui/use-toast";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import IconButton from "./IconButton";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const email = "kenson.hui22@gmail.com";

const SocialTab = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex mt-4">
        <div className="flex space-x-4">
          <IconButton
            Icon={EnvelopeClosedIcon}
            onClick={() => {
              navigator.clipboard.writeText(email);
              toast({
                title: "Email copied!",
                description: `${email} has been saved to your clipboard.`,
                duration: 1500,
              });
            }}
          />
          <IconButton
            Icon={LinkedInLogoIcon}
            href="https://www.linkedin.com/in/kensonhui/"
            external
          />
          <IconButton
            Icon={GitHubLogoIcon}
            href="https://github.com/kensonhui"
            external
          />
          <IconButton
            Icon={TwitterLogoIcon}
            href="https://x.com/kenson_hui"
            external
          />
        </div>
      </div>
    </div>
  );
};

export default SocialTab;
