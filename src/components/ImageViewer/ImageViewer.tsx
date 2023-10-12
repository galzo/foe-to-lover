import { Box, Button, Typography, alpha } from "@mui/material";
import React, { FC, useContext, useRef, useState } from "react";
import { ImageSelectionContext } from "../../context/ImageSelectionContext/ImageSelectionContext";
import { Image } from "../../styleComponents/Image";
import { AppColors } from "../../consts/colors";
import { AppShadows } from "../../consts/shadows";
import { exportComponentAsJPEG, exportComponentAsPNG } from "react-component-export-image";
import "@fontsource/bungee-shade";
import { AppFonts } from "../../consts/fonts";
import { ImageText } from "../ImageText/ImageText";
import { ImageEmoji } from "../ImageEmoji/ImageEmoji";
import { ImageAsset } from "../ImageAsset/ImageAsset";

export const ImageViewer = () => {
  const { selectedImageUrl } = useContext(ImageSelectionContext);
  const componentRef = useRef<HTMLDivElement>();

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
        <ImageText
          font="orbitron"
          text="I STAND WITH ISRAEL"
          size={40}
          backgroundColor={AppColors.blueDeFrance}
          parentElement={componentRef.current}
        />
        <ImageAsset parentElement={componentRef.current} size={120} asset="menKiss" />
        <ImageEmoji parentElement={componentRef.current} size={50} emoji="inLove3" />
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
      <Button onClick={() => exportComponentAsJPEG(componentRef as any)}>{"Test"}</Button>
    </>
  );
};
