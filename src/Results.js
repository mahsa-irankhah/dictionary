import React from 'react';
import Meanings from './Meanings';

import Phonetics from './Phonetics'


const Results = (props) => {
    const data = props.data;
    

    
    if (data) {
      return (
        <div className="results">
          <h2>{data.word}</h2>
          <div className="phonetics">
            {/* <audio src={data.phonetics[0].audio} controls/> */}
            
            <Phonetics phonetics={data.phonetics[0]} />
          </div>
          {data.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meanings meanings={meaning} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
    
};

export default Results;