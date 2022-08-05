import { BsSearch } from 'react-icons/bs';
import './Searchbar.css';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.elements.searchField.value);
    form.reset();
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <BsSearch />
        </button>

        <input
          className="input"
          name="searchField"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
