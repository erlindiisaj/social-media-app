import Event from "../event/event.components";

import EVENTS_DATA from "../../datas/EVENTS_DATA";

import { Box, Typography } from "@mui/material";

const Events = () => {
  return (
    <Box mt={3}>
      <Typography variant="h4" color="black.light">
        EVENTS OF THE MONTH
      </Typography>
      <Box
        sx={{
          display: "flex",
          padding: "20px 25px",
          width: "100%",
          backgroundColor: "white.main",
          borderRadius: "12px",
          height: "260px",
          marginTop: "10px",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {EVENTS_DATA.map((event) => (
          <Event key={event.date} event={event} />
        ))}
      </Box>
    </Box>
  );
};

export default Events;
