import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import Image from "mui-image";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useMediaQuery from "@mui/material/useMediaQuery";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid lightgray",
  borderRadius: "20px",
  marginLeft: 0,
  width: "70%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:1200px)");
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {isMobile && (
          <IconButton sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <IconButton>
          <Image bgColor="transparent" src={"/Logo/kitee.png"} alt="Logo" />
        </IconButton>
        {!isMobile && (
          <Typography
            variant="h5"
            sx={{ ml: 1, fontWeight: "bold", color: "#931621" }}
          >
            Kyte
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          flex: "2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search kyte..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "flex-end",
          gap: "3px",
        }}
      >
        <IconButton>
          <Image bgColor="transparent" src={"Icons/chat.png"} />
        </IconButton>
        <IconButton>
          <Image bgColor="transparent" src={"Icons/add.png"} />
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Image bgColor="transparent" src={"Icons/man.png"} />
        </IconButton>
      </Box>
    </Box>
  );
}
