import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { AppFonts } from "../../consts/fonts";
import { AppColors } from "../../consts/colors";

interface ImageTextProps {
  font?: keyof typeof AppFonts;
  backgroundColor?: string;
  color?: string;
  size?: number;
  text: string;
}

export const ImageText: FC<ImageTextProps> = ({ font, color, backgroundColor, size, text }) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor || "",
        padding: "8px",
        position: "absolute",
        zIndex: 10,
      }}
    >
      <Typography
        sx={{
          fontFamily: AppFonts[font || "roboto"],
          color: color || AppColors.text,
          fontSize: size || "50px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
