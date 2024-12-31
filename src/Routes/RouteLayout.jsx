import { Routes, Route } from 'react-router-dom'
import { ErrorPage, Moviedetail, Movielist, Search } from '../pages/Index'

export const RouteLayout = () => {
    
   
    return (
        <Routes>
            <Route path="/" element={<Movielist  apipath='movie/upcoming' title='Home' />} />
            <Route path="movie/:id" element={<Moviedetail   />} />
            <Route path="movie/popular" element={<Movielist  apipath='movie/popular' title='popular'  />} />
            <Route path="movie/top" element={<Movielist apipath='movie/top_rated' title='top-rated' />} />
            <Route path="movie/upcoming" element={<Movielist apipath='movie/upcoming' title='upcoming' />} />
            <Route path='search' element={<Search apipath='search/movie' />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}