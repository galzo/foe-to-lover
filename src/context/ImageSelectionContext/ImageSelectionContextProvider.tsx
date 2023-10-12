import { FC, ReactNode } from "react";
import { ImageSelectionContext } from "./ImageSelectionContext";
import { useImageSelection } from "../../hooks/useImageSelection";

export const ImageSelectionContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { selectedImage, selectedImageUrl, onSelectImage } = useImageSelection();

  return (
    <ImageSelectionContext.Provider
      value={{
        selectedImage,
        selectedImageUrl,
        onSelectImage,
      }}
    >
      {children}
    </ImageSelectionContext.Provider>
  );
};
