import { Typography, Box } from "@mui/material";

import SUGGEST_DATA from "../../SUGGEST_DATA";
import SuggestUser from "../suggest-user/suggest-user.component";

const Suggest = () => {
  return (
    <Box>
      <Typography color="black.light" variant="h4">
        SUGGESTS
      </Typography>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white.main",
          borderRadius: "12px",
          height: "fit-content",
          marginTop: "10px",
          padding: "10px 25px",
        }}
      >
        {SUGGEST_DATA.map((suggest) => (
          <SuggestUser key={suggest.id} suggest={suggest} />
        ))}
      </Box>
    </Box>
  );
};

export default Suggest;
