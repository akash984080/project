
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const Moviedetail = () => {

  const params = useParams()
  const [movie, setMovie] = useState({})
  const api_key = import.meta.env.VITE_APP_APIKEY

  const img = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path ? movie.poster_path : (movie.backdrop_path && movie.backdrop_path)}`


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${api_key}`)
        const results = await response.json()
        
        setMovie(results)
      } catch (error) {
        console.log("failed to fetch");
      }
    }
    fetchMovie()
  }, [params.id])



  return (
    <div className="lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative">
          <div className="flex">
            <div className="flex items-center justify-center w-[90%] bg-gray-100 overflow-hidden rounded-md">
              <img src={img} className="w-[300px] h-[400px] object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            <div className="w-full">
              <h1 className="text-[1.6rem] lg:text-[1.8rem] text-gray-800 font-semibold mb-1">{movie.title}  {`(${movie.release_date
                && movie.release_date.substring(0, 4)} )`}</h1>

              <p className="text-gray-400 text-[0.9rem]">{movie.tagline && movie.tagline} </p>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full gap-1 lg:gap-4 mb-4">
                <div className="flex items-center">
                  <span className="text-[1.4rem] font-semibold text-gray-800">{movie.release_date && movie.release_date} {`[${movie.origin_country && movie.origin_country}]`
                  } </span>

                </div>
                <div className="flex items-center gap-1">
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 border-t-[2px] border-gray-200 border-dashed mt-1 pt-6">
            <h2 className="text-gray-700 font-semibold mb-2">Movie Overview:</h2>
            <p className="text-[0.9rem] text-gray-600">
              {movie.overview}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-300 font-semibold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M12 2L14.39 8.26L21 9.27L16 14.14L17.27 20.77L12 17.77L6.73 20.77L8 14.14L3 9.27L9.61 8.26L12 2Z" fill="currentColor" />
              </svg>
            </span>
            <span className="text-gray-800 font-semibold">{movie.vote_average && movie.vote_average} / 10</span>
            <span className="text-gray-500">{`[${movie.vote_count && movie.vote_count} votes]`}</span>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 my-2">
              {
                movie.genres && movie.genres.map((genre) => (<span key={genre.id}
                  className={` w-fit h-fit  rounded-md border-2 transition-all duration-300 border-[#0FABCA] p-1 `}
                > {genre.name}</span>
                ))
              }

            </div>
          </div>
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium text-gray-400">Runtime: <span className="font-semibold text-gray-700">{movie.runtime && movie.runtime} min</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


<span className="text-gray-400 text-[1rem] ml-2"> min</span>

