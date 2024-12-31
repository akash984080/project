
import { Link } from 'react-router-dom'
import movie from '../assets/movie.jpg'
export const Moviecard = ({ movie }) => {
  

  const img = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path ? movie.poster_path:(movie.backdrop_path?movie.backdrop_path:movie)}`
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/movie/${movie.id}`}>
          <img className="rounded-t-lg" src={img} alt={`${movie.title}`}  />
        </Link>
        <div className="p-5">
          <Link to={`/movie/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overviews} </p>
       
        </div>
      </div>
    </div>
  )
}
