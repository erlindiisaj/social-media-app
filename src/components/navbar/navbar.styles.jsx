import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.borderRadius,
  backgroundColor: theme.palette.backgroundAccent.main,
  "&:hover": {
    backgroundColor: theme.palette.backgroundAccent.light,
    boxShadow: "0px 0px 12px -3px #b7bbc7",
  },
  marginRight: theme.spacing(2.5),
  height: "40px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  backgroundColor: theme.palette.grey.main,
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.black.main,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": {
      color: theme.palette.gray.main,
      opacity: 1,
    },
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
