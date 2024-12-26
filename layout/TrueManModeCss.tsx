"use client";
import { useContext } from "react";
import { context } from "../context/context";

const TrueManModeCss: React.FC = () => {
  const { mode } = useContext(context);
  return (
    <head>
      <link
        rel="stylesheet"
        href={`css/style-${mode ? "dark" : "light"}.css`}
      />
    </head>
  );
};
export default TrueManModeCss;