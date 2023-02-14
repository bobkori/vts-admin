import { RichTextEditorProps } from "@mantine/rte";
import React from "react";
import RichTextEditor from "../rich-text-editor";
import styles from "./input.module.scss";

type Ref = React.Ref<HTMLInputElement>;
type ButtonProps = {
  label?: string;
} & RichTextEditorProps;
const _Input = ({ label, ...rest }: ButtonProps, ref: Ref) => {
  return (
    <div className={`${styles.inputbox} ${styles.inputfrom}`}>
      {label && <label>{label}</label>}
      <RichTextEditor {...rest} />
    </div>
  );
};

const RichTextEditorInput = React.forwardRef(_Input);
export default RichTextEditorInput;
