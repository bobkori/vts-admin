import React from "react";

type ImageUploadAndPreviewProps = {
  onPickImage?: (file: File) => void;
  imageValue?: File | null;
};
