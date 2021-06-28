import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

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

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={() => console.log("clicked")}
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      <br />

      {/* icons */}
      <AcUnitIcon />
      <AcUnitIcon color="secondary" fontSize="large" />
      <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="small" />
      <AcUnitIcon color="error" fontSize="small" />
      <AcUnitIcon color="disabled" fontSize="small" />

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
