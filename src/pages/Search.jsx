import React, { useEffect } from 'react'
import { data, useSearchParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch';
import { Moviecard } from '../components/Moviecard';

export const Search = ({ apipath }) => {

  const [searchparams] = useSearchParams()
  const queryterm = searchparams.get("q")

  const { data: Moviedata } = useFetch(apipath, queryterm)





  return (
    <div className='max-w-[1280px] mx-auto min-h-[90vh] p-2 '>

      <div>
        <p className='text-3xl font-bold mb-2'>{Moviedata.length == 0 ? `No Results Found '${queryterm}'` : `Results for ' ${queryterm}' `}</p>
      </div>

      <div className='flex gap-3 flex-wrap'>
        {
          Moviedata.map((movie) => (
             <Moviecard movie={movie} key={movie.id} />

          ))
        }

      </div>

    </div>
  )
}
