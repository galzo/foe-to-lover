import { FC, ReactNode, useRef } from "react";
import { ImageSelectionContext } from "./ImageSelectionContext";
import { useImageSelection } from "../../hooks/useImageSelection";

export const ImageSelectionContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { selectedImage, selectedImageUrl, onSelectImage } = useImageSelection();
  const imageRef = useRef<HTMLDivElement | undefined>();

  return (
    <ImageSelectionContext.Provider
      value={{
        selectedImage,
        selectedImageUrl,
        onSelectImage,
        imageElementRef: imageRef,
      }}
    >
      {children}
    </ImageSelectionContext.Provider>
  );
};
