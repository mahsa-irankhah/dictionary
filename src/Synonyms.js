import React from 'react';

const Synonyms = (props) => {
    const synonyms = props.synonyms;

if (synonyms) {
  return (
  <ul>
     {synonyms.map((synonym, index) => {
         return (
             <li key={index}>{synonym}</li>
         )
     })}
  </ul>);
} else {
    return null;
}
    
};

export default Synonyms;