import { Box, Button, Typography, alpha } from "@mui/material";
import React, { FC, useContext, useRef, useState } from "react";
import { ImageSelectionContext } from "../../context/ImageSelectionContext/ImageSelectionContext";
import { Image } from "../../styleComponents/Image";
import { AppColors } from "../../consts/colors";
import { AppShadows } from "../../consts/shadows";
import { exportComponentAsPNG } from "react-component-export-image";
import "@fontsource/bungee-shade";
import { AppFonts } from "../../consts/fonts";
import { ImageText } from "../ImageText/ImageText";

export const ImageViewer = () => {
  const { selectedImageUrl } = useContext(ImageSelectionContext);
  const componentRef = useRef();

  if (!selectedImageUrl) return null;

  return (
    <>
      <Box
        ref={componentRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
          width: "60%",
          height: "60%",
          border: `1px dashed ${alpha(AppColors.border, 0.3)}`,
          position: "relative",
        }}
      >
        <ImageText font="ultra" text="testing this shit" />
        <Image
          src={selectedImageUrl}
          alt="preview"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "6px",
            transition: "all 200ms ease-in-out",
            boxShadow: AppShadows.imageShadow,
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </Box>
      <Button onClick={() => exportComponentAsPNG(componentRef as any)}>{"Test"}</Button>
    </>
  );
};
