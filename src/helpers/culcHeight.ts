export const culcHeight = (size: string) => {
  switch (size) {
    case "sm":
      return "40px";
    case "md":
      return "48px";
    case "lg":
      return "52px";
    default:
      return "48px";
  }
};
