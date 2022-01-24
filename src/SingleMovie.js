import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { data: movie, loading, error } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className='loading'></div>;
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    imdbRating,
    Director: director,
  } = movie;
  const isEnd = /\.$/.test(plot);
  const search = title.replace(/\s/g, '+');
  const link = `https://www.imdb.com/find?q=Searching+${search}`;
  console.log(movie);

  return (
    <section className='single-movie'>
      <img src={poster === 'N/A' ? url : poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <h4>
          director: <i>{director}</i>
        </h4>
        <h4>
          <h4>{year}</h4>
          IMDb rating: <span style={{ color: 'orange' }}>{imdbRating}</span>
          <span style={{ color: 'grey' }}>/10</span>
        </h4>
        <p>{isEnd ? plot : `${plot}...`}</p>
        <Link to='/' className='btn'>
          back to movies
        </Link>
        <a href={link} style={{ marginLeft: '0.5em' }} className='btn'>
          more details
        </a>
      </div>
    </section>
  );
};

export default SingleMovie;
