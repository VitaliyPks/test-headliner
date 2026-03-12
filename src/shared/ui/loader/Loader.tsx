import { Overlay, Spinner } from "./Loader.styled";

interface Props {
  fullScreen?: boolean;
  size?: "small" | "medium" | "large";
}

export const Loader = ({ fullScreen = false, size = "medium" }: Props) => {
  const sizeMap = { small: 24, medium: 40, large: 64 };

  return (
    <Overlay $fullScreen={fullScreen}>
      <Spinner style={{ width: sizeMap[size], height: sizeMap[size] }} />
    </Overlay>
  );
};
