import React from 'react'

export default function Genre ({ genres }) {
  return (
    <>
      {genres
        ? <span><b>Genre: </b></span>
        : null
      }

      {genres
        ? genres.length > 0
          ? genres.map((genre, index) => {
              if (index + 1 === genres.length) {
                return <span key={genre.id}>{genre.name}</span>
              } else {
                return <span key={genre.id}>{genre.name}, </span>
              }
            })
          : <span>{genres.name}</span>
        : null
      }
    </>
  )
}