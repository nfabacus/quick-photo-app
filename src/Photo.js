import React, { Component } from 'react'

const Photo = (props)=>{

  let photoElement;

  if(!props.photo) {
    return <h2>Loading..</h2>
  }
  return (
    <div>
      <h1>Photo</h1>
       <img src={props.photo.url} />
    </div>
  )

}

export default Photo
