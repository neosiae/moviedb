import React from 'react'
import Poster from '../poster'

export default function Item ({ item }) {
  return (
    item.poster_path && 
      <Poster
        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
        alt={item.name}
      />
  )
}