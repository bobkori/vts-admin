/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Checkbox from "../checkbox";
import styles from "./textarea.module.scss";
import { ImageUploadAndPreviewProps } from "./types";
import ImagePreview from "./preview";

type Ref = React.Ref<HTMLTextAreaElement>;
type ButtonProps = {
  label?: string;
  showImage?: boolean;
  markAsProps?: {
    show?: boolean;
  } & React.ComponentProps<typeof Checkbox>;
} & ImageUploadAndPreviewProps &
  React.ComponentPropsWithRef<"textarea">;

/**
 * Image Preview TextArea
 */
const TextAreaWithImage = (
  {
    label,
    showImage,
    markAsProps,
    onPickImage,
    imageValue,
    ...rest
  }: ButtonProps,
  ref: Ref
) => {
  return (
    <div className={`${styles.textareabox} ${styles.textareafrom}`}>
      {label && (
        <label>
          {markAsProps?.show && <Checkbox {...markAsProps} />}
          {label}
        </label>
      )}
      <div className={styles["image-container"]}>
        <textarea ref={ref} {...rest} />
        {showImage && (
          <ImagePreview onPickImage={onPickImage} imageValue={imageValue} />
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(TextAreaWithImage);
