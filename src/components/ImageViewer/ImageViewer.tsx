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
  const { selectedImageUrl, imageElementRef } = useContext(ImageSelectionContext);
  if (!selectedImageUrl) return null;

  return (
    <>
      <Box
        ref={imageElementRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
          height: "60%",
          border: `1px dashed ${alpha(AppColors.border, 0.3)}`,
          position: "relative",
        }}
      >
        <ImageText
          font="ultra"
          text="I STAND WITH ISRAEL"
          size={35}
          backgroundColor={AppColors.blueDeFrance}
          parentElement={imageElementRef?.current}
        />
        <ImageAsset parentElement={imageElementRef?.current} size={120} asset="israflag3" />
        <ImageEmoji parentElement={imageElementRef?.current} size={50} emoji="inLove1" />
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
    </>
  );
};
