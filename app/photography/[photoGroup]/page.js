import React from 'react'
import PhotoGroup from './PhotoGroup'
import {
  hazratImages,
  kashmirImages,
  potraitImages,
  rajasthanImages,
  lakeImages,
  prideImages,
} from '../data/imagesData'

const page = ({ params }) => {
  let group = ''
  let photos = ''
  if (params.photoGroup === 'hazrat') {
    group = 'Hazrat'
    photos = hazratImages
  } else if (params.photoGroup === 'kashmir') {
    group = 'Kashmir'
    photos = kashmirImages
  } else if (params.photoGroup === 'potrait') {
    group = 'Potraits'
    photos = potraitImages
  } else if (params.photoGroup === 'rajasthan') {
    group = 'Rajasthan'
    photos = rajasthanImages
  } else if (params.photoGroup === 'lake') {
    group = 'Lake District'
    photos = lakeImages
  } else if (params.photoGroup === 'pride') {
    group = 'Pride'
    photos = prideImages
  }
  return <PhotoGroup photoGroup={group} photos={photos} />
}

export default page
