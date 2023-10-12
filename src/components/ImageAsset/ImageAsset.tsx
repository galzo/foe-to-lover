import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import Draggable from "react-draggable";
import { AppEmojis } from "../../consts/emojis";
import { AppAssets } from "../../consts/assets";
import { Image } from "../../styleComponents/Image";

interface ImageAssetProps {
  size?: number;
  asset: keyof typeof AppAssets;
  parentElement?: HTMLDivElement;
}

export const ImageAsset: FC<ImageAssetProps> = ({ size = 150, parentElement, asset }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
      offsetParent={parentElement}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <Image
          src={AppAssets[asset]}
          alt="asset"
          sx={{
            userSelect: "none",
            pointerEvents: "none",
            width: isDragging ? `${size + 10}px` : `${size}px`,
            transition: "width 100ms",
          }}
        />
      </Box>
    </Draggable>
  );
};
