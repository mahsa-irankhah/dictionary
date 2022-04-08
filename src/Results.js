import React from 'react';
import Meanings from './Meanings';
import Phonetics from './Phonetics';
import './Results.css';


const Results = (props) => {
    const data = props.data;
    

    
    if (data) {
      return (
        <div className="results">
          <section className='word-section'>
            <h2 className='word'>{data.word}</h2>
            <div className="phonetics">
              <Phonetics phonetics={data.phonetics[0]} />
            </div>
          </section>
          <div>
            {data.meanings.map((meaning, index) => {
              return (
                <section key={index} className='single-meaning'>
                  <Meanings meanings={meaning} />
                </section>
              );
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
    
};

export default Results;