import React from "react";

interface SearchBarProps {
  onSearchSubmit: () => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit, onSearchChange }) => {
  return (
    <>
      <input type="text" onChange={onSearchChange} />
      <button onClick={onSearchSubmit}>Search</button>
    </>
  );
};

export default SearchBar;