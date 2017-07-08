export const fetchPhotos = ()=> (
  fetch('http://jsonplaceholder.typicode.com/photos?_limit=30', {
    method: 'get'
  }).then((response)=>response.json())
)

export const fetchPhoto = (photo) =>(
  fetch(`http://jsonplaceholder.typicode.com/photos?id=${photo}`,{
    method: 'get'
  }).then((response) => response.json())
)
