import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SidebarLinkContainer = styled(Box)(({ theme }) => ({
  border: "1px solid transparent",
  verticalAlign: "middle",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "3.125rem",
  lineHeight: "3.125rem",
  cursor: "pointer",
  zIndex: "1",
  transition: ".3s ease",
  "&:hover": {
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.backgroundAccent.main,
  },
}));

export const SidebarLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.black.main,
}));
