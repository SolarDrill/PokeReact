import React from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearchSubmit: () => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchSubmit, onSearchChange }) => {
  return (
    <header>
      <SearchBar onSearchSubmit={onSearchSubmit} onSearchChange={onSearchChange} />
    </header>
  );
};

export default Header;