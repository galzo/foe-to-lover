export interface ImageSelectionContextType {
  selectedImage?: File;
  selectedImageUrl?: string;
  onSelectImage: (file: File) => void;
}
