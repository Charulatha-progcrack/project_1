import React from 'react'

export const Moviecard = ({watchlist,poster_path,name,handlewatchlist,handleremove,movieObj}) => {
 
function isContain(movieObj){
  for(let i=0;i<watchlist.length;i++){
    if(watchlist[i].id==movieObj.id){
      return true;
    }
  }
  return false;

}

  return (
    <div className='h-[30vh] p-2 m-2 bg-cover relative bg-center  hover:scale-110 duration-300 hover:cursor-pointer w-[20vw] rounded-xl' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}} >
  {isContain(movieObj) ? (
    
 <div onClick={()=>handleremove(movieObj)} className='bg-black flex justify-center h-6 w-8'> &#10060; </div>
) : (
 
 <div onClick={()=>handlewatchlist(movieObj)} className='flex justify-center bg-black   h-6 w-8'>
  &#128525;
 </div>
 
  )}

    <div className='p-2 absolute bottom-1 text-white  text-center bg-gray-950 bg-opacity-50 '>
      {name}
    </div>
     </div>
  )
}
