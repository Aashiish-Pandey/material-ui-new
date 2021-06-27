import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        create a new note
      </Typography>

      <Button type ="submit" 
      variant="contained" 
      color="secondary"
      onClick ={()=>console.log('clicked')}
      >Submit</Button>

      {/* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color ="secondary" variant="contained">
        <Button>one</Button>
        <Button>one</Button>
        <Button>one</Button>
        <Button>one</Button>
      </ButtonGroup> */}
    </Container>
  );
}
