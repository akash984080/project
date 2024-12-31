import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Pagination = ({ page, handlenext, handleprev }) => {

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className='flex justify-center mt-9'>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li onClick={handleprev}>
                        <Link to="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                    </li>
                    <li>
                        <Link to="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</Link>
                    </li>

                    <li onClick={handlenext}>
                        <Link to="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                    </li>
                </ul>
            </nav>
        </div>



    )
}

export default Pagination