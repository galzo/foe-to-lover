import { Box, Typography } from "@mui/material";
import React, { FC, forwardRef, useMemo, useRef, useState } from "react";
import { AppFonts } from "../../consts/fonts";
import { AppColors } from "../../consts/colors";
import Draggable from "react-draggable";
import { AppShadows } from "../../consts/shadows";

interface ImageTextProps {
  font?: keyof typeof AppFonts;
  backgroundColor?: string;
  color?: string;
  size?: number;
  text: string;
  parentElement?: HTMLDivElement;
}

export const ImageText: FC<ImageTextProps> = ({ backgroundColor, font, color, size = 50, text, parentElement }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 250 }}
      bounds={"parent"}
      offsetParent={parentElement}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <Box
        sx={{
          backgroundColor: backgroundColor || "",
          padding: "18px",
          position: "absolute",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: AppFonts[font || "roboto"],
            color: color || AppColors.text,
            fontSize: isDragging ? `${size + 2}px` : `${size}px`,
            transition: "font-size 100ms",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Draggable>
  );
};
