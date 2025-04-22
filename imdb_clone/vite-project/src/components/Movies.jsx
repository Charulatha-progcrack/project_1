import React, { useEffect, useState } from 'react'
import { Moviecard } from './Moviecard'
import axios from 'axios'
import { Pagination } from './Pagination'
export const Movies = ({watchlist,handleremove,handlewatchlist}) => {

  const [movies,setMovies]=useState([])
  const[pageNo,setPageNo]=useState(1)
  
  const prevPage =()=>{
    if(pageNo>1){
    setPageNo(pageNo-1)
    }
  }
const nextPage =()=>{
  setPageNo(pageNo+1)
}
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cf3c1427eed92da39843090a53941102&language=en-US&page=${pageNo}`).then(function(res){
      console.log(res)
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div>
      <div className='text-center font-bold text-2xl p-2'>Trending Movies</div>
   <div className='flex flex-row flex-wrap p-4 justify-center'>
     {movies.map((movieObj)=>{
          return <Moviecard key={movieObj.id} watchlist={watchlist} handleremove={handleremove} movieObj={movieObj} handlewatchlist={handlewatchlist} poster_path={movieObj.poster_path} name={movieObj.original_title}/>
     })}
    
   </div>
 <Pagination prevPage={prevPage} nextPage={nextPage} pageNo={pageNo}/>
    </div>
  )
}
