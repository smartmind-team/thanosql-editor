import { ImgHTMLAttributes } from "react";

export default ({ src, style, name, ...props }: IconProps) => {
  return <img src={src} alt={`${name}_icon`} style={{ width: "1rem", height: "1rem", ...style }} {...props} />;
};

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}
