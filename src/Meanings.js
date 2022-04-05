import React from 'react';

const Meanings = (props) => {
    const meanings = props.meanings;
    
    return (
      <div>
        <h3>{meanings.partOfSpeech}</h3>
        {meanings.definitions.map((definition, index) => {
            return (
              <p key={index}>
                <strong>
                  {index + 1}.{definition.definition}
                </strong>
                <br />
                <em>{definition.example}</em>
              </p>
            );
        })}
      </div>
    );
};

export default Meanings;