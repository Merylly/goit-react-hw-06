import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={css.searchForm}>
      <h2 className={css.searchTitle}>Find contacts by name</h2>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default SearchBox;
