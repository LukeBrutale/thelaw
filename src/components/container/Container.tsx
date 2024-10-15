import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className=" sm:p-2.5 md:p-4 xl:px-[50px]">{children}</div>;
}
