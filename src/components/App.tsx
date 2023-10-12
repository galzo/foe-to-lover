import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { ImageSelectionContextProvider } from "../context/ImageSelectionContext/ImageSelectionContextProvider";
import { RootContainer } from "../styleComponents/RootContainer";
import { ImageInput } from "./ImageInput/ImageInput";
import { ImageViewer } from "./ImageViewer/ImageViewer";
import { ImageToolbar } from "./ImageToolbar/ImageToolbar";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ImageSelectionContextProvider>
        <RootContainer>
          <ImageInput />
          <ImageViewer />
          <ImageToolbar />
        </RootContainer>
      </ImageSelectionContextProvider>
    </ThemeProvider>
  );
};
