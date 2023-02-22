import React, { HTMLAttributes } from "react";
import start from "../../assets/start.svg";

export default ({
  width = "1rem",
  height = "1rem",
}: HTMLAttributes<HTMLImageElement> & { width?: string; height?: string }) => {
  return <img src={start} alt="start_icon" style={{ width, height }} />;
};
