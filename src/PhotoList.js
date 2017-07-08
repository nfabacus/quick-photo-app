import React, { Component } from 'react'

const PhotoList = (props)=>{

  let listItems
  console.log(props.photos)
  if(props.photos.length===0) {
    listItems=<h2>Loading..</h2>
  }
  return listItems =(
    <div>
      <h1>Photo List</h1>
      <ul>
        {props.photos.map(photo=>(
          <li onClick={()=>
            props.history.push('/photo')} key={photo.id}><img src={photo.thumbnailUrl} /></li>
        ))}
      </ul>
    </div>
  )

}

export default PhotoList
