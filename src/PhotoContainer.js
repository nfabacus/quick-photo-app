import React, { Component } from 'react'
import { fetchPhoto } from './api/photo'
import Photo from './Photo'

class PhotoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      photo:{}
    }
  }

  componentDidMount() {
    fetchPhoto()
      .then((data)=>{
        this.setState({photo: data})
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Ha!</h1>
        <Photo photo={this.state.photo}
        history={this.props.history}
        />
      </div>


    );
  }
}

export default PhotoContainer
