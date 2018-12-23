import React from 'react';
import Full from '../../icons/components/full';
import './full-screen.css';

const FullScreen = (props) => {
  return (
    <div
      className='FullScreen'
      onClick={props.handleFullScreenClick}
      >
    <Full
      color='white'
      size='25'

    />
  </div>
  )
}

export default FullScreen;
