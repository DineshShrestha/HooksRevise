import React from 'react'

const MovieList=(props)=>{
    const movies = props.movieList;
  return (
    <div>
        {movies.map((movie, index)=>
        <div className='text-white' key={index}>{movie}</div>)}
    </div>
  )
}

export default MovieList