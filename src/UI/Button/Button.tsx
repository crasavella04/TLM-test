import { memo } from "react";
import { variantColor } from "../../helpers/color";
import { culcHeight } from "../../helpers/culcHeight";
import styles from "./Button.module.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md" | "lg";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  color?: "main" | "error";
}

const Button = ({
  children,
  className,
  endContent,
  startContent,
  style,
  size = "md",
  isLoading = false,
  color = "main",
  disabled,
  ...props
}: ButtonProps) => {
  const height = culcHeight(size);
  const variant = variantColor(color);

  return (
    <button
      className={styles.button + " " + className}
      style={{
        height,
        ...variant,
        ...style,
      }}
      disabled={isLoading || disabled}
      {...props}
    >
      {startContent}
      {children}
      {endContent}

      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinnerContainer} />
        </div>
      )}
    </button>
  );
};

export default memo(Button);
