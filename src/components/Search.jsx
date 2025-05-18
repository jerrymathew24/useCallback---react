function Search ({ handleChange }) {
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      type="text"
      placeholder="Search for a brand"
    />
  );
}
export default Search;