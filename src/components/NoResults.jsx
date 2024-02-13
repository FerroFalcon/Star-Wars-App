import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

const NoResults = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <FontAwesomeIcon icon={faTriangleExclamation} size="5x" />
    </Box>
  );
};

export default NoResults;
