import { Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, setSearchResults } from "../redux/slices/searchSlice";

const SearchArea = () => {
  const { searchTerm, searchResults } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleDrop = (e) => {
    const sortBy = e.target.value;
    const sortedResults = [...searchResults].sort((a, b) => {
      if (sortBy !== "name") {
        const numA = parseInt(a[sortBy], 10);
        const numB = parseInt(b[sortBy], 10);
        return numA - numB;
      } else {
        return a[sortBy].localeCompare(b[sortBy]);
      }
    });
    dispatch(setSearchResults(sortedResults));
  };

  return (
    <>
      <div className="cont">
        <TextField
          id="filled-search"
          label="Search for characters..."
          type="search"
          variant="filled"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="dropdown">
          <Button
            sx={{ ml: 2 }}
            size="large"
            variant="contained"
            className="dropbtn"
          >
            Sort
          </Button>
          <div className="dropdown-content">
            <Button fullWidth value="name" onClick={handleDrop}>
              Name
            </Button>
            <Button fullWidth value="height" onClick={handleDrop}>
              Height
            </Button>
            <Button fullWidth value="mass" onClick={handleDrop}>
              Mass
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArea;
