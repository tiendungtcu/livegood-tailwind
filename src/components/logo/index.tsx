import Image from "next/image";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <Image
      data-test="icon"
      src="/logo.png"
      alt="live goods"
      width="127"
      height="58"
    />
  );
};
