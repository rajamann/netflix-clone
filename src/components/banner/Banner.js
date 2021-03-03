import React from 'react'
import './Banner.css'

export const Banner = () => {
  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)}...` : string

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://images.bonanzastatic.com/afu/images/15f4/4c89/f1cc_6116498539/__57.jpg)`,
        backgroundPosition: 'center center'
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Title</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(
            'test testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest test',
            150
          )}
        </h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
