import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import { useSelector } from "react-redux";
import DataRow from "./DataRow";

const DataTable = () => {
  const { searchResults } = useSelector((state) => state.search);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#e0e0e0" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Species</TableCell>
            <TableCell align="right">Gender&nbsp;(g)</TableCell>
            <TableCell align="right">Height&nbsp;(g)</TableCell>
            <TableCell align="right">Mass&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? searchResults.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : searchResults
          ).map((character) => (
            <TableRow
              key={character.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <DataRow character={character} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={searchResults.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ backgroundColor: "#e0e0e0", borderTop: "1px solid #ddd" }}
      />
    </TableContainer>
  );
};

export default DataTable;
