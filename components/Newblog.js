import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Link from 'next/link'
import React from 'react'

const Newblog = () => {
  return (
    <Container maxWidth="sm">
      <Box  >
        <Typography textAlign={"center"} variant="h3" color={"salmon"} >Hunting coder</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ marginTop: "40px" }} >
          <Grid item xs={6}>
            <div className="blogs">
              <Typography textAlign={"left"} variant="h6" color={"salmon"} >New Blogs</Typography>
              <div className="blogItem">
                <Link href={"blogpost/reactjs"}  > <h3>How to learn React js in 2023</h3></Link>
                <p>React js hooks and all things</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="blogs">
              <Typography textAlign={"left"} variant="h6" color={"salmon"} >New Blogs</Typography>
              <div className="blogItem">
              <Link href={"blogpost/Javascript"}  > <h3>How to learn Javascript in 2023</h3> </Link>
               
                <p>React js hooks and all things</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="blogs">
              <Typography textAlign={"left"} variant="h6" color={"salmon"} >New Blogs</Typography>
              <div className="blogItem"> 
                <Link href={"blogpost/py"}  > <h3>How to learn py in 2023</h3> </Link>
                <p>React js hooks and all things</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="blogs">
              <Typography textAlign={"left"} variant="h6" color={"salmon"} >New Blogs</Typography>
              <div className="blogItem">
              
                <Link href={"blogpost/ruby"}  >   <h3>How to learn Ruby in 2023</h3> </Link>
                <p>React js hooks and all things</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Newblog