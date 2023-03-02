import stop from "../../assets/stop.svg";
import Icon, { IconProps } from "./Icon";

export default (props: Partial<IconProps>) => {
  return <Icon src={stop} name="stop" {...props} />;
};
