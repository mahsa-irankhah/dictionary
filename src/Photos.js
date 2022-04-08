import React from 'react';
import './Photos.css';
import frame from './images/frame3.jpg'


const Photos = (props) => {
    const photos = props.photos;
    if (photos) { 
        return (
      <div className='row photos'>
        {photos.map((photo, index) => {
          return (
            <div key={index} className='col-4 images-div'>
              <img src={frame} alt="frame" className='frame img-fluid' />
              <img src={photo.src.tiny} alt="word" className='word-photo img-fluid' />
            </div>
          );
        })}
      </div>
    );} else {
        return null;
    }
   
};

export default Photos;