import { MutableRefObject } from "react";

export interface ImageSelectionContextType {
  selectedImage?: File;
  selectedImageUrl?: string;
  imageElementRef?: MutableRefObject<HTMLDivElement | undefined>;
  onSelectImage: (file: File) => void;
}
