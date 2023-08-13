import * as React from "react";
import Button from "@mui/material/Button";

type customButtonProps = {
  text: string;
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "submit" | "button";
  styleHover: string;
  styleBackground: string;
  borderColor?: string;
  disabled?: boolean;
  borderRadius?: number;
  textColor?: string;
  justifyContent?: string;
  href?: string;
};

export default function CustomButton(props: customButtonProps) {
  return (
    <Button
      disabled={props.disabled}
      type={props.type}
      variant="contained"
      disableRipple
      onClick={props.onClick}
      href={props.href}
      sx={{
        justifyContent:
          props.justifyContent !== undefined ? props.justifyContent : "center",
        width: "100%",
        height: "100%",
        boxShadow: "none",
        textTransform: "none",
        fontWeight: "bolder",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        borderRadius: props.borderRadius !== undefined ? props.borderRadius : 5,
        color: props.textColor !== undefined ? props.textColor : "white",
        lineHeight: 1.5,
        backgroundColor: props.styleBackground,
        borderColor:
          props.borderColor !== undefined
            ? props.borderColor
            : props.styleBackground,
        "&:hover": {
          backgroundColor: props.styleHover,
          borderColor:
            props.borderColor !== undefined
              ? props.borderColor
              : props.styleBackground,
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: props.styleHover,
          borderColor: props.styleHover,
        },
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
      }}
      startIcon={props.icon}
    >
      {props.text}
    </Button>
  );
}
