import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

const SearchWord = () => {
    
    let [keyword, setKeyword] = useState("");
    let [resuls, setResults] = useState(null)

    const search = event => {
        event.preventDefault();
        
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
    }

    const handleResponse = response => {
      setResults(response.data[0])
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
        <Results data={resuls} />
      </div>
    );
};

export default SearchWord;