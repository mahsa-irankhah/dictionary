import React from 'react';
import Synonyms from './Synonyms';
import './Meanings.css'

const Meanings = (props) => {
    const meanings = props.meanings;
    console.log(meanings)
    
    return (
      <div>
        <h3>{meanings.partOfSpeech}</h3>
        {meanings.definitions.map((definition, index) => {
            return (
              <div key={index}>
                <strong>
                  {index + 1}.{definition.definition}
                </strong>
                <br />
                <em>{definition.example}</em>
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
        })}
      </div>
    );
};

export default Meanings;