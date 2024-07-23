import React from "react";
import LightFooterSecondary from "@/components/Footer/LightFooterSecondary";

type Props = {};

function AuraFooter({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <LightFooterSecondary />
    </div>
  );
}

export default AuraFooter;
