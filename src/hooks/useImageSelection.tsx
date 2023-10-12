import { useEffect, useState } from "react";
import { imageMimeType } from "../consts/formats";

export const useImageSelection = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [imageURL, setImageURL] = useState<string>();

  const onSelectImage = (file: File) => {
    if (!file.type.match(imageMimeType)) {
      console.warn("Image mime type is not valid");
      return;
    }

    setSelectedImage(file);
  };

  useEffect(() => {
    let fileReader: FileReader;
    let isCancelled: Boolean;

    if (selectedImage) {
      fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const { result } = e.target;
        if (result && !isCancelled) {
          setImageURL(result);
        }
      };
      fileReader.readAsDataURL(selectedImage);
    }
    return () => {
      isCancelled = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [selectedImage]);

  return {
    onSelectImage: onSelectImage,
    selectedImageUrl: imageURL,
    selectedImage: selectedImage,
  };
};
