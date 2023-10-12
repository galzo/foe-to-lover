import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { FC, useContext } from "react";
import { AppColors } from "../../consts/colors";
import { IconDownload, IconFlag, IconHeart, IconTypography } from "tabler-icons";
import { exportComponentAsJPEG } from "react-component-export-image";
import { ImageSelectionContext } from "../../context/ImageSelectionContext/ImageSelectionContext";

export const ImageToolbar = () => {
  const { imageElementRef } = useContext(ImageSelectionContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="contained" color="secondary" sx={{ marginRight: "16px" }}>
        <IconFlag style={{ marginRight: "4px" }} />
        <Typography>{"החלף דגל"}</Typography>
      </Button>
      <Button variant="contained" color="secondary" sx={{ marginRight: "16px" }}>
        <IconHeart style={{ marginRight: "4px" }} />
        <Typography>{"החלף אמוג׳י"}</Typography>
      </Button>
      <Button variant="contained" color="secondary" sx={{ marginRight: "16px" }}>
        <IconTypography style={{ marginRight: "4px" }} />
        <Typography>{"החלף פונט"}</Typography>
      </Button>
      <Button variant="contained" color="primary" onClick={() => exportComponentAsJPEG(imageElementRef as any)}>
        <IconDownload style={{ marginRight: "4px" }} />
        <Typography>{"הורד תמונה"}</Typography>
      </Button>
    </Box>
  );
};
