import React from 'react'

export const Pagination = ({prevPage,nextPage,pageNo}) => {
  return (
 
    <div className='bg-gray-400 flex flex-row justify-center'>
    <div className='px-8' onClick={prevPage}><i class="fa-solid fa-arrow-left"></i></div>
    <div>{pageNo}</div>
    <div className='px-8 ' onClick={nextPage}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}
