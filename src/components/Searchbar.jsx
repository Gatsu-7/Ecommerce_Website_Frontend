import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/shop?query=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="flex items-center space-x-14">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
            setSearch("");
          }
        }}
        className="px-4 py-2 border rounded-lg w-[17rem] outline-none"
        placeholder="What we can help you find?"
      />
    </div>
  );
};

export default SearchBar;
