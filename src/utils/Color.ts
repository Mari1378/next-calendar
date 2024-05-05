import Color from "color";

export const colorWithLowOpacity = (color: string) => {
  return Color(color).alpha(0.25);
};
