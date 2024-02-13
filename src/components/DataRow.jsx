import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { TableCell } from "@mui/material";

export default function DataRow({ character }) {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await fetch(character.species);
        const data = await response.json();
        setSpecies(data);
      } catch (error) {
        // console.error("Error fetching species:", error);
      }
    };

    fetchSpecies();

    return () => {
      setSpecies(null);
    };
  }, [character.species]);
  return (
    <>
      <TableCell component="th" scope="row">
        {character.name}
      </TableCell>
      <TableCell align="right">
        {species ? (
          <FontAwesomeIcon icon={faAndroid} />
        ) : character.gender !== "n/a" ? (
          <FontAwesomeIcon icon={faCircleUser} />
        ) : (
          <FontAwesomeIcon icon={faQuestion} />
        )}
      </TableCell>
      <TableCell align="right">{character.gender}</TableCell>
      <TableCell align="right">{character.height}</TableCell>
      <TableCell align="right">{character.mass}</TableCell>
    </>
  );
}
