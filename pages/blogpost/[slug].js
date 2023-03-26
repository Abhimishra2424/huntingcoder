import React from "react";
import { useRouter } from "next/router";
import { Container, Box, Typography } from "@mui/material";

const Slug = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <Container maxWidth="md">
      <Box>
        <Typography>Title of page : {slug}</Typography>
      </Box>
    </Container>
  );
};

export default Slug;
