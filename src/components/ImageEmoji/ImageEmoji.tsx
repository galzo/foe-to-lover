import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import Draggable from "react-draggable";
import { AppEmojis } from "../../consts/emojis";

interface ImageEmojiProps {
  size?: number;
  emoji: keyof typeof AppEmojis;
  parentElement?: HTMLDivElement;
}

export const ImageEmoji: FC<ImageEmojiProps> = ({ size = 16, parentElement, emoji }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
      offsetParent={parentElement}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <Typography
        sx={{
          position: "absolute",
          fontSize: isDragging ? `${size + 10}px` : `${size}px`,
          transition: "font-size 100ms",
        }}
      >
        {AppEmojis[emoji]}
      </Typography>
    </Draggable>
  );
};
