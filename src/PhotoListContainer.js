import React, { Component } from 'react'
import { fetchPhotos } from './api/photo'
import PhotoList from './PhotoList'

class PhotoListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos:[]
    }
  }

  componentDidMount() {
    fetchPhotos()
      .then((data)=>{
        this.setState({photos: data})
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Ha!</h1>
        <PhotoList photos={this.state.photos}
        history={this.props.history}
        />
      </div>


    );
  }
}

export default PhotoListContainer
