export const variantColor = (variant: string): React.CSSProperties => {
  switch (variant) {
    case "main":
      return {
        color: "#fff",
        background: "blue",
      };
    case "error":
      return {
        color: "#fff",
        background: "red",
      };
    default:
      return {
        color: "#fff",
        background: "blue",
      };
  }
};
