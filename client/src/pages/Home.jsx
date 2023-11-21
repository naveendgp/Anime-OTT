import { SideNav } from "../Components/SideNav"
import { Cardmax } from "../Components/Cardmax"
import { useEffect, useState } from "react"
import { Topnav } from "../Components/Topnav"
import { Card } from "../Components/card"
import axios from "axios"
import { io } from "socket.io-client"
import CardCarousel from "../Components/carousel"

import { useNavigate } from "react-router-dom"


const socket = io("http://localhost:3000")


export const  Home = () => {

    const [filter,setFilter] = useState("")    
    const [anime,setanime] = useState([])
    const [animebanner,setbanner] = useState([])

    
        socket.on("message",(data) => {
        setanime( [...anime,data]) 
        })
    
        socket.on("banner",(data) => {
            setbanner([...animebanner,data])
        })
    
    useEffect(() => {
        const fetchAnime = async () => {
            try{
                const response = await axios.get("http://localhost:3000/home")

                setanime(response.data)
            }catch (err){
                console.log(err)
            }
        }

        fetchAnime()
    },[])

    useEffect(() => {
        const fetchPoster = async () => {
            try{
                const response = await axios.get("http://localhost:3000/homebanner")
                setbanner(response.data)
                
            }catch (err){
                console.log(err)
            }
        }
        fetchPoster()
    },[])

    

    return (
        <div>
    
            <SideNav/>
            <Topnav onChange={event => (setFilter(event.target.value))}/>
            <div>
                <CardCarousel cards={animebanner} interval={3000}/>
                    
  
                <div className="cardlayout">
                    {anime.filter((val,keys) => {
                        if(filter == ""){
                            return val
                        }else if(val.title.toLowerCase().includes(filter.toLowerCase())){
                            return val
                        }
                    }).map(val => (
                        <Card name={val.title}  desc={val.category}  year={val.year} season={val.seasons} img={val.img} key={val._id}/>
                    ))}                                    
                </div>
            </div>
        
        </div>
   
    )}
