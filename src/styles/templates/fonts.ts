import { css } from "styled-components";

interface FontTemplateProp {
  size: string;
  height: number | string;
  weight: number;
  color: number | string;
  align: "center" | "start" | "left" | "end";
  family: string;
}

export const fontTemplate = (size: string, height: string, weight: number, color: string, family: string, align: 'start' | 'center' | 'end' = "start") => {
  return css`
    font-size: ${size};
    font-weight: ${weight};
    line-height: ${height};
    text-align: ${align};
    color: rgb(${color});
    font-family: ${family};
  `;
};
