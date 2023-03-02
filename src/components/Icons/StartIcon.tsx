import start from "../../assets/start.svg";
import Icon, { IconProps } from "./Icon";

export default (props: Partial<IconProps>) => (
  <Icon src={start} name="start" {...props} />
);
