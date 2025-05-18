function Search ({ handleChange }) {
    console.log('search component is rendered')

  return (
    
    <input
      onChange={(e) => handleChange(e.target.value)}
      type="text"
      placeholder="Search for a brand"
    />
  );
}
export default Search;