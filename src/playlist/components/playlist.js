import React from 'react';
import Media from './media';
import  './play.css';

const  Playlist = (props) => {
    return(
         <div  className='Play'>
        {
          props.playlist.map((item)=> {
            return  < Media openModal={props.handleOpenModal} {...item} key={item.id}/>
          })
        }
      </div>
      )
    }

export default Playlist;
