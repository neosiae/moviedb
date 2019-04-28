import React, { useEffect } from 'react'
import { useActions, useSelector } from 'react-redux'
import { fetchInfo } from '../../actions/app'
import Video from '../../components/video'
import Poster from '../../components/poster'
import Genre from '../../components/genre'

export default function Movie ({ match }) {
  const { isLoading, items } = useSelector(state => state.app)
  const fetchMovieInfo = useActions(() => fetchInfo('movie', match.params.movieId), [])

  useEffect(() => {
    fetchMovieInfo()
  }, [])

  return (
    isLoading
      ? <p>Loading...</p>
      : items &&
        <div>
          {items.videos && items.videos.results.length > 0
            ? <Video id={items.videos.results[0].key} name={items.name} />
            : <Poster src={`https://image.tmdb.org/t/p/w300/${items.poster_path}`} alt={items.name} />
          }
          <h1>{items.title}</h1>
          <Genre genres={items.genres} />
          <p>{items.overview}</p>
        </div> 
  )
}