import React from "react";

export const SearchBar: React.FC<{
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
}> = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
      <button className="search-btn" type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};
