import { Box, Typography } from "@mui/material";
import React from "react";
import { ImageSelector } from "./ImageSelector/ImageSelector";
import { useImageSelection } from "../hooks/useImageSelection";
import { ImageViewer } from "./ImageViewer/ImageViewer";

export const App = () => {
  const { onSelectImage, selectedImage } = useImageSelection();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageSelector onSelectImage={onSelectImage} />
      {selectedImage && <ImageViewer imageSource={selectedImage} />}
    </Box>
  );
};
