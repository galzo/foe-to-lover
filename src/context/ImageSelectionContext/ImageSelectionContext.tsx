import { createContext } from "react";
import { ImageSelectionContextType } from "./ImageSelectionContext.types";

export const ImageSelectionContext = createContext<ImageSelectionContextType>({
  selectedImage: undefined,
  selectedImageUrl: undefined,
  onSelectImage: (file) => ({}),
  imageElementRef: undefined,
});
