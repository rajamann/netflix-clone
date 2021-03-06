import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../axios'

export const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])

  const base_url = 'https://image.tmdb.org/t/p/original'

  const fetchMovies = async () => {
    const response = await axios.get(fetchUrl)
    setMovies(response.data.results)
    return response
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const renderMovies = () =>
    movies?.map(
      movie =>
        ((isLargeRow && movie?.poster_path) ||
          (!isLargeRow && movie?.backdrop_path)) && (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
        )
    )

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className={'row__posters'}>{movies && renderMovies()}</div>
    </div>
  )
}

export default Row
