
const SearchBar = () => {
    return (
      <div className="flex justify-between border border-gray-300 p-2">
        <input type="text" 
               placeholder="Search" 
               className="italic"
        ></input>
        <button>🔍</button>
      </div>
    );
  }
  
  export default SearchBar;
  