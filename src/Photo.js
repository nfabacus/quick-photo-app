import React, { Component } from 'react'

const Photo = (props)=>{

  let photoElement;
  console.log(props.photo)
  if(!props.photo) {
    photoElement=<h2>Loading..</h2>
  }
  return photoElement =(
    <div>
      <h1>Photo</h1>
       <img src={this.props.photo.url} />
    </div>
  )

}

export default Photo
