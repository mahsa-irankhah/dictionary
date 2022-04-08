import React from 'react';
import './Synonyms.css';

const Synonyms = (props) => {
    const synonyms = props.synonyms;
    

if (synonyms) {
    console.log(synonyms)
  return (
    <ul className="d-flex">
      
      {synonyms.map((synonym, index) => {
        return (
          <li key={index}>
            {synonym}{" "}
          </li>
        );
      })}
    </ul>
  );
} else {
    return null;
}
    
};

export default Synonyms;