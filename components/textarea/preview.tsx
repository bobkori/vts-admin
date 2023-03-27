/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./textarea.module.scss";
import imageConverter from "@/utils/blog-to-url";
import { ImageUploadAndPreviewProps } from "./types";

const ImagePreview = ({
  onPickImage,
  imageValue,
}: ImageUploadAndPreviewProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [image, setImage] = React.useState(imageValue as File);

  const onPickerLoad = React.useCallback(() => {
    const input = inputRef.current;
    if (input) {
      input.click();
    }
  }, []);
  const onChangeImage = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (files) {
        const filesArray = Array.from(files);
        filesArray.forEach(async (file) => {
          setImage(file);
        });
      }
    },
    []
  );

  const imageUrl = React.useMemo(() => {
    if (image === null) {
      return `/images/image-preview.png`;
    } else {
      return imageConverter(image);
    }
  }, [image]);

  React.useEffect(() => {
    if (image) {
      if (onPickImage) {
        onPickImage(image);
      }
    }
  }, [onPickImage, image]);
  React.useEffect(() => {
    if (imageValue) {
      setImage(imageValue);
    }
  }, [imageValue]);

  return (
    <div className={styles["image-preview"]} onClick={onPickerLoad}>
      <input
        type="file"
        ref={inputRef}
        onChange={onChangeImage}
        className={styles["input-file"]}
      />
      <img title="Choose Image" src={imageUrl} />
    </div>
  );
};

export default ImagePreview;
