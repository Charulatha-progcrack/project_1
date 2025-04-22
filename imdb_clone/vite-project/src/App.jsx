
import './App.css'
import { useEffect, useState } from "react";
import { Movies } from './components/Movies';
import { Banners } from './components/Banners'
import { Navbar } from './components/Navbar'
import { Watchlist } from './components/Watchlist'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  const [watchlist, setWatchlist]=useState([])
  let handlewatchlist = (movieObj) =>{
    const newwatch =[...watchlist,movieObj]
    localStorage.setItem("moviekey",JSON.stringify(newwatch))
    setWatchlist(newwatch)
    
    
 }
 
 let handleremove =(movieObj) =>{
   let filtered=watchlist.filter((m)=>{
     return m.id != movieObj.id;
 })
 
 setWatchlist(filtered)
 localStorage.setItem("moviekey",JSON.stringify(filtered))
 }
 
 useEffect(()=>{
  let mov=localStorage.getItem("moviekey")
  if(!mov){
    return
  }
  setWatchlist(JSON.parse(mov))
},[])

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <> <Banners/> <Movies handleremove={handleremove} handlewatchlist={handlewatchlist} watchlist={watchlist}/></>}/>
      
      <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleremove={handleremove}/>}/>
      
      </Routes>
      </BrowserRouter>
      
      

      
    </>
  )
}

export default App
