import Navbar from "../../components/navbar/navbar.component";
import Story from "../../components/story/story.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import CreatePost from "../../components/create-post/create-post.component";
import Post from "../../components/post/post.component";
import Suggest from "../../components/suggest/suggest.component";
import STORY_DATA from "../../data";
import SUGGEST_DATA from "../../SUGGEST_DATA";
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
          gridTemplateColumns: "1fr 3fr 1fr",
          columnGap: "45px",
          padding: "20px 70px",
        }}
      >
        <Box>
          <Box
            sx={{
              width: "auto",
              gridColumn: "1/2",
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
          >
            <Sidebar />
          </Box>
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
          >
            <CreatePost />
          </Box>
          <Box
            sx={{
              padding: "40px",
              width: "100%",
              backgroundColor: "white.main",
              borderRadius: "12px",
              height: "fit-content",
              marginTop: "30px",
            }}
          >
            <Post />
          </Box>
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
                height: "fit-content",
                marginTop: "10px",
                padding: "10px 25px",
              }}
            >
              {SUGGEST_DATA.map((suggest) => {
                console.log(suggest);
                return <Suggest id={suggest.id} suggest={suggest} />;
              })}
            </Box>
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
