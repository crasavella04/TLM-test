import { memo } from "react";
import { variantColor } from "../../helpers/color";
import { culcHeight } from "../../helpers/culcHeight";
import styles from "./Input.module.css";

type OmitSize = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size"
>;

interface InputProps extends OmitSize {
  size?: "sm" | "md" | "lg";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  color?: "main" | "error";
  type?: "search" | "text" | "email" | "password";
  errorMessage?: string;
  label?: string;
}

const Input = ({
  size = "md",
  startContent,
  endContent,
  errorMessage,
  color = "main",
  style,
  className,
  label,
  ...props
}: InputProps) => {
  const height = culcHeight(size);
  const variant = variantColor(color);
  return (
    <label className={styles.container}>
      {label}
      <div
        className={styles.inputContainer + " " + className}
        style={{
          height,
          ...{
            border: `2px solid ${variant.background}`,
          },
          ...style,
        }}
      >
        {startContent}
        <input className={styles.input} {...props} />
        {endContent}
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </label>
  );
};

export default memo(Input);
