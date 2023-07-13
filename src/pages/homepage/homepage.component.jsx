import Navbar from "../../components/navbar/navbar.component";
import Story from "../../components/story/story.component";
import STORY_DATA from "../../data";
import { Avatar, Box, IconButton, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <Box
      height={"100%"}
      width={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "backgroundAccent.main",
      }}
    >
      <Navbar />
      <Box
        width="100%"
        height="100%"
        sx={{
          display: "grid",
          gridTemplateColumns: "0.2fr 0.6fr 0.2fr",
          columnGap: "45px",
          padding: "20px 70px",
        }}
      >
        <Box>
          <Box
            sx={{
              height: "80px",
              backgroundColor: "white.main",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <IconButton>
              <Avatar />
            </IconButton>
            <Box ml="10px">
              <Typography fontWeight="600">Erlindi Isaj</Typography>
              <Typography color="gray.main">@erlindiisaj</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              gridColumn: "1/2",
              height: "220px",
              backgroundColor: "white.main",
              borderRadius: "12px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            gridColumn: "2/3",
          }}
        >
          <Box display="flex" justifyContent="space-between">
            {STORY_DATA.map((story) => {
              const { name, imageUrl, id } = story;
              return <Story name={name} imageUrl={imageUrl} id={id} />;
            })}
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white.main",
              borderRadius: "12px",
              height: "80px",
              marginTop: "30px",
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white.main",
              borderRadius: "12px",
              height: "710px",
              marginTop: "30px",
            }}
          ></Box>
        </Box>
        <Box>
          <Box>
            <Typography color="black.light" variant="h4">
              SUGGESTS
            </Typography>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "white.main",
                borderRadius: "12px",
                height: "210px",
                marginTop: "10px",
              }}
            ></Box>
          </Box>
          <Box marginTop="30px">
            <Typography variant="h4" color="black.light">
              EVENTS OF THE MONTH
            </Typography>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "white.main",
                borderRadius: "12px",
                height: "260px",
                marginTop: "10px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
