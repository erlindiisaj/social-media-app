import { Box, Typography } from "@mui/material";
import { ReactComponent as LocationSVG } from "../../Images/location-logo.svg";
import { ReactComponent as Calendar } from "../../Images/calendar05.svg";
import EVENTS_DATA from "../../EVENTS_DATA";

const Events = ({ event }) => {
  const { date, name, location } = event;
  return (
    <Box display="flex" alignItems="center">
      <Calendar />
      <Box ml={1}>
        <Typography variant="h3" fontWeight={500}>
          {name}
        </Typography>
        <Box mt={0.5} display="flex" alignItems="center">
          <LocationSVG />
          <Typography color="black.light" ml={0.4} variant="h5">
            {location}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
