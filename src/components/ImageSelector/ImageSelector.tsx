import { Box, Button } from "@mui/material";
import { ChangeEvent, FC, useRef } from "react";
import { acceptableFormats } from "../../consts/imageSelectorConsts";

interface ImageSelectorProps {
  onSelectImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageSelector: FC<ImageSelectorProps> = ({ onSelectImage }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  return (
    <Box sx={{ width: "100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form>
        <input
          ref={imageInputRef}
          type="file"
          id="image"
          accept={acceptableFormats.join(", ")}
          onChange={onSelectImage}
          hidden
          style={{ display: "none" }}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => imageInputRef?.current?.click()}
          data-testid="BrowseFiles"
        >
          {"Upload Image"}
        </Button>
      </form>
    </Box>
  );
};
