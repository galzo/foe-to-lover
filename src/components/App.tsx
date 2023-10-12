import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { ImageSelectionContextProvider } from "../context/ImageSelectionContext/ImageSelectionContextProvider";
import { RootContainer } from "../styleComponents/RootContainer";
import { ImageInput } from "./ImageInput/ImageInput";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ImageSelectionContextProvider>
        <RootContainer>
          <ImageInput />
        </RootContainer>
      </ImageSelectionContextProvider>
    </ThemeProvider>
  );
};
