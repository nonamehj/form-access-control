import "./SearchFormStyle.css";
import { useApiContext } from "./../../apiContext";
const SearchForm = () => {
  const { inputValue, handleSearch } = useApiContext();
  return (
    <div className="search-form-container">
      <div className="search-center search-form-wrapper">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-form-input"
            value={inputValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <p className="input-example">{`예: react, javascript, html, css`}</p>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
