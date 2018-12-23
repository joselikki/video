import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {

  state = {
    author:'Jose Miguel Paredes'
  }
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     author: props.author,
  //   }
  // //   this.handleClick = this.handleClick.bind(this)
  // }

  handleClick = (ev) => {

  this.props.openModal(this.props)
  }
  render() {
    const styles = {
      container:{
        color: 'red',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
        <div className='Media' onClick={this.handleClick}>
          <div className='Media-cover'>
            <img
              src={this.props.cover}
              alt=''
              width={260}
              height={160}
              className='Media-image'
            />
            <h3 className='Media-title'>{this.props.title}</h3>
            <p className='Media-author'>{this.props.author}</p>
          </div>
        </div>
    )
  }
}

Media.propTypes = {
  cover: propTypes.string,
  title: propTypes.string.isRequired,
  author: propTypes.string,
  type: propTypes.oneOf(['video', 'audio'])

}

export default Media;
