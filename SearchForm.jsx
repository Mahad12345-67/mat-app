import React from 'react';

const SearchForm = ({ query, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Sök maträtt"
          value={query}
          onChange={onChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
