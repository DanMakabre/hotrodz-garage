import React from 'react'

interface Props {
    params: { id: number, photoId: number }
}

// const PhotoPage = (props: Props) => {

const PhotoPage = ({ params: { id, photoId }}: Props) => {
  return (
    <div>PhotoPage {id} {photoId}</div>
  )
}

export default PhotoPage