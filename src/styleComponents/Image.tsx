import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

interface ImageProps extends BoxProps {
  alt: string;
  src: string;
}

export const Image: FC<ImageProps> = (props) => {
  return <Box {...props} component={"img"} />;
};
