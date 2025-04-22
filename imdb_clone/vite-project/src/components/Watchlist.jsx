import React from "react";
import { useState,useEffect } from "react";
import genreid from '../Utility/Genre'
export const Watchlist = ({watchlist,setWatchlist,handleremove}) => {
 const [search,setSearch]=useState('')
 const [genre,setGenre]=useState(['All Genre'])
 const [currgen,setCurr]=useState('All Genre')
 
 let handlesearch = (e) =>{
      setSearch(e.target.value)
 }
let handlegenre = (m)=>{
setCurr(m)
}
 let sortinc=()=>{
  let inc=watchlist.sort((a,b)=>{
    return a.vote_average-b.vote_average
  })
  setWatchlist([...inc]);
 }
 let sortdec=()=>{
  let dec=watchlist.sort((a,b)=>{
    return b.vote_average-a.vote_average
  })
  setWatchlist([...dec]);
 }
 useEffect(()=>{
  let t=watchlist.map((m)=>{
    return genreid[m.genre_ids[0]]
  })
  t=new Set(t)
  setGenre(['All Genre',...t])
 },[watchlist])
  return (
    <>

    <div className="flex justify-center m-4 flex-wrap ">
      
    {genre.map((m)=>{
      return <div onClick={()=>handlegenre(m)} className={ currgen==m?"bg-blue-400/50 h-[2rem] w-[5rem] text-center rounded-xl mx-4" :"bg-gray-400/50 h-[2rem] w-[5rem] text-center rounded-xl mx-4"}> {m} </div>
    })}
    
     
    </div>
    <div className="flex justify-center my-4">
      <input onChange={handlesearch} value={search} type="search" placeholder="Search a movie" className="h-[3rem] text-black w-[18rem] border-2 text-center border-white bg-gray-300 "/>
    </div>
      <div className="m-8 overflow-auto border border-gray-300">
        <table className="border-b-2 w-full text-center">
          <thead className="border-b-2 border-t-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortinc} className="p-2"><i  class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2" >Ratings</div>
                <div className="p-2" onClick={sortdec}><i  class="fa-solid fa-arrow-down"></i></div>
                </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((m)=>{
              if(currgen=='All Genre'){
                return true;
              }
              return genreid[m.genre_ids[0]]==currgen
            }).filter((m)=>{
              return m.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((m)=>{
              return <tr className="border-b-2">
              <td className="flex px-6 py-2 items-center">
                
                   <img src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} className="w-[10rem] h-[10 rem] " alt="image"/>
                  <div className="mx-10"><p>{m.title}</p></div>
                
              </td>   
                 <td>{m.vote_average}</td>
                 <td>{m.popularity}</td>
                 <td>{genreid[m.genre_ids[0]]}</td>
                 <td className="text-red-500" onClick={()=>handleremove(m)}>Delete</td>
            </tr>
  
            })
          }
          
            
            
          </tbody>
        </table>
      </div>
    
   </>
  )}
  
