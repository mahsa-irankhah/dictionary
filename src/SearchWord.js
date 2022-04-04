import React, { useState } from 'react';

const SearchWord = () => {
    
    let [keyword, setKeyword] = useState("")

    const search = event => {
        event.preventDefault();
        alert(`searching for ${keyword}`)
    }

    const wordChangeHandler = event => {
        setKeyword(event.target.value);
    }
    return (
      <div>
        <form className="d-flex justify-content-center" onSubmit={search}>
          <input
            type="search"
            placeholder="type a word..."
            className="form-control w-25 mx-2"
            onChange={wordChangeHandler}
          />
          <button className="btn btn-primary">search</button>
        </form>
      </div>
    );
};

export default SearchWord;