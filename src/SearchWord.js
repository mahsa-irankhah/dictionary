import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './SearchWord.css';
import Photos from './Photos'

const SearchWord = () => {
    
    let [keyword, setKeyword] = useState("");
    let [resuls, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    const directoryHandleResponse = (response) => {
      setResults(response.data[0]);
    };

    const wordChangeHandler = (event) => {
      setKeyword(event.target.value);
    };

    const search = event => {
        event.preventDefault();
        
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(directoryHandleResponse);

        //search for photos

        const pexelsApiKey =
          "563492ad6f91700001000001642535c21968489097495efd444422ab";

        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        const headers = {'Authorization': `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, {headers: headers}).then(pexelsHandleResponse).catch(error => console.log(error))
    }

    const pexelsHandleResponse = response => {
      console.log(response);
      setPhotos(response.data.photos);
    }

    
    return (
      <div>
        <form className="d-flex justify-content-center" onSubmit={search}>
          <input
            type="search"
            placeholder="type a word..."
            className="input mx-2"
            onChange={wordChangeHandler}
          />
          <button className="btn button">search</button>
        </form>
        <Results data={resuls} />
        <Photos photos={photos} />
      </div>
    );
};

export default SearchWord;