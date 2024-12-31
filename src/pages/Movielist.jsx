
import { useEffect, useState } from 'react';
import { Moviecard } from '../components/Moviecard'
import { useFetch } from '../Hooks/useFetch'
import Pagination from '../components/Pagination';


export const Movielist = ({ apipath, title }) => {

  const [page, setpage] = useState(1)

  const handleprev = () => {

    if (page > 1) {
      setpage((prev) => prev - 1)
    } else {
      setpage(1)
    }
  }
  const handlenext = () => {

    setpage((prev) => prev + 1)

  }
  useEffect(() => {
    document.title = `${title}/MovieTube`
  })
  const { data: Moviedata } = useFetch(apipath, undefined, page)


  return (
    <div className='max-w-[1280px] mx-auto min-h-[90vh] p-2 '>
      <div className='flex  gap-3 justify-start flex-wrap  usm:justify-evenly '>
        {
          Moviedata.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))
        }
      </div>
      <Pagination page={page} handlenext={handlenext} handleprev={handleprev} />
    </div>
  )
}
