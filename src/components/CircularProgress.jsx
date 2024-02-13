import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

const CircularProgress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <FontAwesomeIcon icon={faSpinner} pulse size="3x" />
    </Box>
  );
};

export default CircularProgress;
