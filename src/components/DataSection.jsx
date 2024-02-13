import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "./CircularProgress";
import NoResults from "./NoResults";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../redux/slices/searchSlice";
import { setLoading } from "../redux/slices/dataTableSlice";
import DataTable from "./DataTable";
import ApiDown from "./ApiDown";

const DataSection = () => {
  const { searchTerm, searchResults } = useSelector((state) => state.search);
  const { loading } = useSelector((state) => state.dataTable);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch(
          `https://swapi.dev/api/people/?search=${searchTerm}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        dispatch(setSearchResults(data.results));
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <Box sx={{ px: 5 }}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <ApiDown />
        ) : searchResults.length === 0 ? (
          <NoResults />
        ) : (
          <DataTable />
        )}
      </Box>
    </>
  );
};

export default DataSection;
