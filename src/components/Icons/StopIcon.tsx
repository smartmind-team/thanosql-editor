import React, { HTMLAttributes } from "react";
import stop from "../../assets/stop.svg";

export default ({
  width = "1rem",
  height = "1rem",
  ...props
}: HTMLAttributes<HTMLImageElement> & { width?: string; height?: string }) => {
  return (
    <img src={stop} alt="stop_icon" style={{ width, height }} {...props} />
  );
};
