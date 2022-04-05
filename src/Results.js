import React from 'react';
import Meanings from './Meanings';

const Results = (props) => {
    const data = props.data;
    if (data) {
      return (
        <div>
          <h2>{data.word}</h2>
          {data.meanings.map((meaning, index) => 
            { return <div key={index}>
                <Meanings meanings={meaning}/>
            </div>}
            )}
        </div>
      );
    } else {
      return null;
    }
    
};

export default Results;