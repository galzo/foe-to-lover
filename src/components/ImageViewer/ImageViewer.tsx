import { Box } from "@mui/material";
import React, { FC } from "react";

interface ImageViewerProps {
  imageSource: string;
}

export const ImageViewer: FC<ImageViewerProps> = ({ imageSource }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <img src={imageSource} alt="preview" />
    </Box>
  );
};
