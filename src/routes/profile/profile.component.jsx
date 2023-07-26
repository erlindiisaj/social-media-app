import { Avatar, Box, Typography } from "@mui/material";
import ProfilePost from "../../components/gallery/gallery.component";
import { useContext } from "react";
import { userContext } from "../../contexts/user.context";
import { userPosts } from "../../contexts/userPosts.context";
import { v4 as uuidv4 } from "uuid";

import POSTS_DATA from "../../datas/POSTS_DATA";
const Profile = () => {
  const { postsList } = useContext(userPosts);
  const { user } = useContext(userContext);
  const { displayName, photoURL } = user;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1689600242990-25189446fd24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80)",
        }}
        borderRadius=" 12px 12px 0px 0px"
        width="100%"
        height="260px"
      >
        <Avatar
          src={photoURL}
          style={{
            border: "4px solid #F5F5F7",
            width: "70px",
            height: "70px",
            top: "223px",
            left: "100px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          marginTop: "40px",
          background: "white",
          width: "55%",
          height: "100px",
        }}
      >
        <Box display="flex">
          <Typography variant="h3" fontWeight={600}>
            {displayName}
          </Typography>
          <Typography ml={1} variant="h5">
            @{displayName}
          </Typography>
        </Box>
        <Box mt={1.5} display="flex">
          <Box textAlign="center">
            <Typography variant="h4">13.4k</Typography>
            <Typography color="black.light" variant="h6">
              Followers
            </Typography>
          </Box>
          <Box margin="0 40px" textAlign="center">
            <Typography variant="h4">230</Typography>
            <Typography color="black.light" variant="h6">
              Posts
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4">12k</Typography>
            <Typography color="black.light" variant="h6">
              Likes
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box width="100%" mt={4.5}>
        <Box
          sx={{
            width: "100%",
          }}
          borderBottom="1px solid #B7BBC7"
          display="flex"
          pb={1}
        >
          <Typography fontWeight={600} variant="h3">
            Posts
          </Typography>
          <Box
            sx={{
              verticalAlign: "middle",
              borderRadius: "5px",
              textAlign: "center",
              backgroundColor: "primary.main",
              width: "30px",
              height: "20px",
            }}
            ml={1}
          >
            <Typography
              fontWeight={600}
              lineHeight="20px"
              variant="h5"
              color="white.main"
            >
              230
            </Typography>
          </Box>
        </Box>
        <Box
          mt={3}
          width="100%"
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          {postsList.map((post) => (
            <ProfilePost key={post.id} post={post.data} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
