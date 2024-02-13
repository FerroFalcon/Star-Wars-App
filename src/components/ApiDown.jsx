import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

const ApiDown = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <FontAwesomeIcon icon={faCircleExclamation} size="5x" />
    </Box>
  );
};

export default ApiDown;
