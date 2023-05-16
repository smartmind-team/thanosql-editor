/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { HTMLAttributes } from "react";

const LoadingSpinner: React.FC<HTMLAttributes<HTMLSpanElement>> = props => {
  return <span className="loader" css={loaderStyle} {...props}></span>;
};

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const loaderStyle = css`
  position: relative;
  width: 1rem;
  height: 1rem;
  border: 1px solid transparent;
  background: #7170dd40;
  background-image: conic-gradient(#7170dd, rgba(113, 112, 221, 0.00520833), rgba(113, 112, 221, 0));
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: ${spin} 1s linear infinite;
  &::after {
    position: fixed;
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    background-color: #f6f7f9;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default LoadingSpinner;
