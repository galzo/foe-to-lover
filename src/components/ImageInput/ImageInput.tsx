import { Box, Button, Typography } from "@mui/material";
import React, { ChangeEvent, FC, useCallback, useContext, useRef } from "react";
import { acceptableFormats } from "../../consts/formats";
import { AppColors } from "../../consts/colors";
import { ImageSelectionContext } from "../../context/ImageSelectionContext/ImageSelectionContext";
import { AppShadows } from "../../consts/shadows";

export const ImageInput = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { onSelectImage, selectedImage } = useContext(ImageSelectionContext);

  const handleChangeImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e?.target?.files?.[0];
      if (!file) return;

      onSelectImage(file);
    },
    [onSelectImage]
  );

  if (selectedImage) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `1px dashed ${AppColors.border}`,
        boxShadow: AppShadows.imageShadow,
        borderRadius: "6px",
        width: "60%",
        height: "60%",
      }}
    >
      <form>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <input
            ref={imageInputRef}
            type="file"
            id="image"
            accept={acceptableFormats.join(", ")}
            onChange={handleChangeImage}
            hidden
            style={{ display: "none" }}
          />
          <Typography variant="body1" color={AppColors.text} fontWeight={900}>
            {"Drag image here"}
          </Typography>

          <Typography color={AppColors.text} fontWeight={900} sx={{ padding: "10px 0" }}>
            - or -
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => imageInputRef?.current?.click()}
            data-testid="BrowseFiles"
          >
            {"Choose Image"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
